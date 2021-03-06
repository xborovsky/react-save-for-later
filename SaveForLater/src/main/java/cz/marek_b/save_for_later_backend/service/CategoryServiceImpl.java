package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.dao.CategoryDao;
import cz.marek_b.save_for_later_backend.dao.NoteDao;
import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.entity.Note;
import cz.marek_b.save_for_later_backend.util.DateUtils;
import java.text.MessageFormat;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryDao categoryDao;
    @Autowired
    private NoteDao noteDao;

    @Override
    public List<Category> findAll() {
        return categoryDao.findAll();
    }

    @Override
    public List<Category> find(Long[] ids) {
        return categoryDao.findAllById(Arrays.asList(ids));
    }

    @Override
    @Transactional
    public Category createCategory(String name, String colorHex) {
        Category category = new Category();
        category.setName(name);
        category.setColorHex(colorHex);
        category.setCreated(DateUtils.now());

        return categoryDao.save(category);
    }

    @Override
    @Transactional
    public void deleteCategory(long id) {
        List<Note> affectedNotes = noteDao.findByCategoryId(id);

        affectedNotes.forEach((note) -> {
            note.setCategory(null);
        });
        noteDao.saveAll(affectedNotes);

        categoryDao.deleteById(id);
    }

    @Override
    @Transactional
    public Category updateCategory(long id, String name, String colorHex) {
        Category category = findCategory(id);
        category.setName(name);
        category.setColorHex(colorHex);
        return categoryDao.save(category);
    }

    @Override
    public Category findCategory(long id) {
        Category category = categoryDao.getOne(id);
        if (category == null) {
            throw new IllegalStateException(
                MessageFormat.format("Category with id={0} does not exist!", id));
        }
        return category;
    }

    @Override
    public Category findCategoryByName(String name) {
        return categoryDao.findByName(name);
    }

}
