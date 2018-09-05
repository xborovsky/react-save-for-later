package cz.marek_b.save_for_later_backend.dao;

import cz.marek_b.save_for_later_backend.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteDao extends JpaRepository<Note, Long> {

}
