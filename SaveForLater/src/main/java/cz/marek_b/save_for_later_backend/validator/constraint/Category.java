package cz.marek_b.save_for_later_backend.validator.constraint;

import cz.marek_b.save_for_later_backend.validator.CategoryValidator;
import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.ElementType.PARAMETER;
import java.lang.annotation.Retention;
import static java.lang.annotation.RetentionPolicy.RUNTIME;
import java.lang.annotation.Target;
import javax.validation.Constraint;
import javax.validation.Payload;

@Target({ FIELD, METHOD, PARAMETER, ANNOTATION_TYPE })
@Retention(RUNTIME)
@Constraint(validatedBy = CategoryValidator.class)
public @interface Category {

    String message() default "{category.invalid}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

}
