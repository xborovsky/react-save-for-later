package cz.marek_b.save_for_later_backend.dao;

import cz.marek_b.save_for_later_backend.entity.Category;
import java.util.List;

public interface CategoryDao extends BaseDao<Category> {

    List<Category> findAll();

    Category createCategory(String name, String colorHex);

}
