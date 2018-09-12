package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.dao.NoteDao;
import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.entity.Note;
import cz.marek_b.save_for_later_backend.entity.User;
import cz.marek_b.save_for_later_backend.util.DateUtils;
import java.text.MessageFormat;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteDao noteDao;

    @Override
    public List<Note> findAll(User user, int offset) {
        return noteDao.findByUser(
            user,
            PageRequest.of(offset, DEFAULT_PAGE_SISE, Sort.by(Order.desc(Note.COLUMN_CREATED)))
        );
    }

    @Override
    public Note createNote(User user, String description, Category category) {
        Note note = new Note();
        note.setUser(user);
        note.setDescription(description);
        note.setCategory(category);
        note.setCreated(DateUtils.now());

        noteDao.save(note);

        return note;
    }

    @Override
    public void deleteNote(long id) {
        noteDao.deleteById(id);
    }

    @Override
    public Note findNote(long id) {
        Optional<Note> note = noteDao.findById(id);
        if (note.isPresent()) {
            return note.get();
        } else {
            throw new IllegalStateException(
                MessageFormat.format("Note with id={0} doest not exist!", id)
            );
        }
    }

    @Override
    public List<Note> find(User user, String text, List<Long> categoryIds, int offset) {
        System.out.println("user.getId(): " + user.getId());
        System.out.println("text: " + text);
        System.out.println("categoryIds: " + categoryIds);
        return noteDao.findByTextAndCategories(user, text, categoryIds,
            PageRequest.of(offset, DEFAULT_PAGE_SISE, Sort.by(Order.desc(Note.COLUMN_CREATED)))
        ).getContent();
    }

}
