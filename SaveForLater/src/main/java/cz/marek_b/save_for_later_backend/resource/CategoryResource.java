package cz.marek_b.save_for_later_backend.resource;

import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.form_model.CategoryFormModel;
import cz.marek_b.save_for_later_backend.service.CategoryService;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/category")
@CrossOrigin
public class CategoryResource {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    @ResponseBody 
    public List<Category> getAllCategories() {
        return categoryService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseBody
    public Category getCategory(@PathVariable("id") long id) {
        return categoryService.findCategory(id);
    }

    @PostMapping("/new")
    public ResponseEntity createNewCategory(
            @Valid @RequestBody CategoryFormModel model,
            BindingResult result) {

        if (result.hasErrors()) {
            return new ResponseEntity<>(result.getAllErrors(), HttpStatus.NOT_ACCEPTABLE);
        } else {
            categoryService.createCategory(model.getName(), model.getColor());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCategory(@PathVariable("id") long categoryId) {
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity createNewCategory(
            @PathVariable("id") long categoryId,
            @Valid @RequestBody CategoryFormModel model,
            BindingResult result) {

        if (result.hasErrors()) {
            return new ResponseEntity<>(result.getAllErrors(), HttpStatus.NOT_ACCEPTABLE);
        } else {
            categoryService.updateCategory(categoryId, model.getName(), model.getColor());
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
