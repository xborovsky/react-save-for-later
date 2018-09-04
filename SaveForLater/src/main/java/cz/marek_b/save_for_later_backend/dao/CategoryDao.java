package cz.marek_b.save_for_later_backend.dao;

import cz.marek_b.save_for_later_backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDao extends JpaRepository<Category, Long> {

}
