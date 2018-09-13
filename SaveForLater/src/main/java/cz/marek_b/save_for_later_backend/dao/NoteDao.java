package cz.marek_b.save_for_later_backend.dao;

import cz.marek_b.save_for_later_backend.entity.Note;
import cz.marek_b.save_for_later_backend.entity.User;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NoteDao extends JpaRepository<Note, Long> {

    @Query("SELECT n FROM Note n WHERE n.user = ?1 AND n.description LIKE CONCAT('%', ?2 ,'%') AND n.category.id IN ?3")
    Page<Note> findByTextAndCategories(User user, String text, List<Long> categoryIds, Pageable pageable);

    @Query("SELECT COUNT(n) FROM Note n WHERE n.user = ?1 AND n.description LIKE CONCAT('%', ?2 ,'%') AND n.category.id IN ?3")
    long countByTextAndCategories(User user, String text, List<Long> categoryIds);

    @Query("SELECT n FROM Note n WHERE n.category.id = ?2")
    List<Note> findByCategoryId(long categoryId);

    @Query("SELECT n FROM Note n WHERE n.user = ?1")
    List<Note> findByUser(User user, Pageable pageable);

    @Query("SELECT COUNT(n) FROM Note n WHERE n.user = ?1")
    long countByUser(User user);

}
