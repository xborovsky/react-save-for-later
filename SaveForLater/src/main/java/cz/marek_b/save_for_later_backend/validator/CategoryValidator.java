package cz.marek_b.save_for_later_backend.validator;

import cz.marek_b.save_for_later_backend.dao.CategoryDao;
import cz.marek_b.save_for_later_backend.validator.constraint.Category;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategoryValidator implements ConstraintValidator<Category, Long> {

    @Autowired
    private CategoryDao categoryDao;

    @Override
    public boolean isValid(Long id, ConstraintValidatorContext context) {
        if (id == null) {
            return false;
        }

        return categoryDao.findById(id) != null;
    }

}
