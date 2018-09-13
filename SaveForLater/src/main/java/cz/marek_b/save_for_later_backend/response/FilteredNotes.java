package cz.marek_b.save_for_later_backend.response;

import cz.marek_b.save_for_later_backend.entity.Note;
import java.util.List;

public class FilteredNotes {

    private final List<Note> notes;
    private final long totalNotes;

    public FilteredNotes(List<Note> notes, long totalNotes) {
        this.notes = notes;
        this.totalNotes = totalNotes;
    }

    public List<Note> getNotes() {
        return notes;
    }

    public long getTotalNotes() {
        return totalNotes;
    }

}
