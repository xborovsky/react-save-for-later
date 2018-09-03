package cz.marek_b.save_for_later_backend.resource;

import cz.marek_b.save_for_later_backend.dao.CategoryDao;
import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.form_model.CategoryFormModel;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/category")
public class CategoryResource {

    @Autowired
    private CategoryDao categoryDao;

    @GetMapping
    @ResponseBody
    public List<Category> getAllCategories() {
        return categoryDao.findAll();
    }

    @PostMapping("/new")
    public ResponseEntity createNewCategory(
            @Valid @ModelAttribute("category") CategoryFormModel model,
            BindingResult result) {

        if (result.hasErrors()) {
            return new ResponseEntity<>(result.getAllErrors(), HttpStatus.NOT_ACCEPTABLE);
        } else {
            categoryDao.createCategory(model.getName(), model.getColor());
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

}
