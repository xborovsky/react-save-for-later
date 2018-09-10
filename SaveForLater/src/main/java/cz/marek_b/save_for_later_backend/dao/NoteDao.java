package cz.marek_b.save_for_later_backend.dao;

import cz.marek_b.save_for_later_backend.entity.Note;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NoteDao extends JpaRepository<Note, Long> {

    @Query("SELECT n FROM Note n WHERE n.description LIKE CONCAT('%', ?1 ,'%') AND n.category.id IN ?2")
    List<Note> findByTextAndCategories(String text, List<Long> categoryIds, Sort sort);

}
