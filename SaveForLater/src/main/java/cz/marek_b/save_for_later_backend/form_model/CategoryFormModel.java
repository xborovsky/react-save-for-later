package cz.marek_b.save_for_later_backend.form_model;

import cz.marek_b.save_for_later_backend.validator.constraint.HexColor;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class CategoryFormModel {

    @Size(min = 3, max = 50, message = "{category.name.size.invalid}")
    private String name;
    @HexColor
    @NotEmpty(message = "{category.color.not_empty.invalid}")
    private String color;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

}
