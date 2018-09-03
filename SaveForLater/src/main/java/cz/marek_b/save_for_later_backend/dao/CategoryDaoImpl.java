package cz.marek_b.save_for_later_backend.dao;

import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.util.DateUtils;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryDaoImpl extends BaseDaoImpl<Category> implements CategoryDao {

    @Override
    public List<Category> findAll() {
        return em.createNamedQuery(Category.FIND_ALL, Category.class).getResultList();
    }

    @Override
    public Category createCategory(String name, String colorHex) {
        Category category = new Category();
        category.setName(name);
        category.setColorHex(colorHex);
        category.setCreated(DateUtils.now());

        em.persist(category);

        return category;
    }

}
