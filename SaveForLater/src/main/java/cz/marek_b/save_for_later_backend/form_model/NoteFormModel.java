package cz.marek_b.save_for_later_backend.form_model;

import cz.marek_b.save_for_later_backend.validator.constraint.Category;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

public class NoteFormModel {

    @NotEmpty
    @Length(max = 10000)
    private String description;
    @NotNull
    @Category
    private Long category;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getCategory() {
        return category;
    }

    public void setCategory(Long category) {
        this.category = category;
    }

}
