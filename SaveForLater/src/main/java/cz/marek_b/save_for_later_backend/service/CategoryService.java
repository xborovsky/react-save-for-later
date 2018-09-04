package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.entity.Category;
import java.util.List;

public interface CategoryService {

    List<Category> findAll();

    Category createCategory(String name, String colorHex);

    void deleteCategory(long id);

    Category updateCategory(long id, String name, String colorHex);

    Category findCategory(long id);

}
