package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.entity.Note;
import cz.marek_b.save_for_later_backend.entity.User;
import java.util.List;

public interface NoteService {
    int DEFAULT_PAGE_SISE = 10;

    List<Note> findAll(User user, int offset);

    Note createNote(User user, String description, Category category);

    void deleteNote(long id);

    Note findNote(long id);

    List<Note> find(User user, String text, List<Long> categoryIds, int offset);
}
