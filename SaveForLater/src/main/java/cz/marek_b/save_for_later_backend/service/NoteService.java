package cz.marek_b.save_for_later_backend.service;

import cz.marek_b.save_for_later_backend.entity.Note;
import java.util.List;

public interface NoteService {

    List<Note> findAll();

}
