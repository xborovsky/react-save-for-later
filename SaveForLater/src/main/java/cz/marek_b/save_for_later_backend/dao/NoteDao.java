package cz.marek_b.save_for_later_backend.dao;

import cz.marek_b.save_for_later_backend.entity.Note;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NoteDao extends JpaRepository<Note, Long> {

    @Query("SELECT n FROM Note n WHERE n.description LIKE CONCAT('%', ?1 ,'%') AND n.category.id IN ?2")
    Page<Note> findByTextAndCategories(String text, List<Long> categoryIds, Pageable pageable);

    @Query("SELECT n FROM Note n WHERE n.category.id = ?1")
    List<Note> findByCategoryId(long categoryId);

}
