package cz.marek_b.save_for_later_backend.validator;

import cz.marek_b.save_for_later_backend.validator.constraint.HexColor;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class HexColorValidator implements ConstraintValidator<HexColor, String> {

    @Override
    public boolean isValid(String val, ConstraintValidatorContext context) {
        if (val == null) {
            return true;
        }

        for (char ch : val.toCharArray()) {
            if (!String.valueOf(ch).matches("[0-9]") &&
                    !String.valueOf(ch).toLowerCase().matches("[a-f]")) {
                return false;
            }
        }

        return true;
    }

}
