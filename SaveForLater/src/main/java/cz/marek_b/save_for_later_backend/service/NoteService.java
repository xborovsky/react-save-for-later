package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.entity.Note;
import java.util.List;

public interface NoteService {

    List<Note> findAll();

    Note createNote(String description, Category category);

    void deleteNote(long id);

    Note findNote(long id);

    List<Note> find(String text, List<Long> categoryIds);
}
