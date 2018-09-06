package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.dao.NoteDao;
import cz.marek_b.save_for_later_backend.entity.Category;
import cz.marek_b.save_for_later_backend.entity.Note;
import cz.marek_b.save_for_later_backend.util.DateUtils;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteDao noteDao;

    @Override
    public List<Note> findAll() {
        return noteDao.findAll(Sort.by(Order.desc(Note.COLUMN_CREATED)));
    }

    @Override
    public Note createNote(String description, Category category) {
        Note note = new Note();
        note.setDescription(description);
        note.setCategory(category);
        note.setCreated(DateUtils.now());

        noteDao.save(note);

        return note;
    }

}
