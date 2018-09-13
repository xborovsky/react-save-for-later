package cz.marek_b.save_for_later_backend.resource;

import com.google.common.collect.Lists;
import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.entity.User;
import cz.marek_b.save_for_later_backend.form_model.NoteFormModel;
import cz.marek_b.save_for_later_backend.response.FilteredNotes;
import cz.marek_b.save_for_later_backend.service.CategoryService;
import cz.marek_b.save_for_later_backend.service.NoteService;
import cz.marek_b.save_for_later_backend.service.UserService;
import java.text.MessageFormat;
import java.util.Arrays;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notes")
@CrossOrigin
public class NoteResource {

    @Autowired
    private NoteService noteService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;

    @GetMapping
    @ResponseBody
    public FilteredNotes filterNotes(
            @RequestParam(value = "userId", required = true) Long userId,
            @RequestParam(value = "text", required = false, defaultValue = "") String text,
            @RequestParam(value = "category", required = false, defaultValue = "") Long[] categoriesIds,
            @RequestParam(value = "offset", required = false, defaultValue = "0") Integer offset) {
        User user = userService.findByProviderId(userId);
        if (user == null) {
            throw new IllegalArgumentException(
                MessageFormat.format("User with provider_id={0} not found!", userId)
            );
        }

        if (text.isEmpty() && categoriesIds.length == 0) {
            return new FilteredNotes(
                noteService.findAll(user, offset),
                noteService.countAll(user)
            );
        }

        List<Long> categories = Arrays.asList(categoriesIds);
        if (categories.isEmpty()) {
            categories = Lists.transform(categoryService.findAll(), (Category category) -> category.getId() );
        }

        return new FilteredNotes(
            noteService.find(user, text, categories, offset),
            noteService.count(user, text, categories)
       );
    }

    @PostMapping("/new")
    public ResponseEntity createNewNote(
            @RequestParam(value = "userId", required = true) Long userId,
            @Valid @RequestBody NoteFormModel model,
            BindingResult result) {

        if (result.hasErrors()) {
            return new ResponseEntity<>(result.getAllErrors(), HttpStatus.NOT_ACCEPTABLE);
        } else {
            User user = userService.findByProviderId(userId);
            if (user == null) {
                throw new IllegalArgumentException(
                    MessageFormat.format("User with provider_id={0} not found!", userId)
                );
            }

            noteService.createNote(
                user,
                model.getDescription(),
                categoryService.findCategory(model.getCategory())
            );
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteNote(@PathVariable("id") long noteId) {
        noteService.deleteNote(noteId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
