package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.dao.NoteDao;
import cz.marek_b.save_for_later_backend.entity.Note;
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

}
