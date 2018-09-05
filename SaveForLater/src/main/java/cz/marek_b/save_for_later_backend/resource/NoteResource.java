package cz.marek_b.save_for_later_backend.resource;

import cz.marek_b.save_for_later_backend.entity.Note;
import cz.marek_b.save_for_later_backend.service.NoteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notes")
@CrossOrigin
public class NoteResource {

    @Autowired
    private NoteService noteService;

    @GetMapping
    @ResponseBody
    public List<Note> getAllNotes() {
        return noteService.findAll();
    }

}
