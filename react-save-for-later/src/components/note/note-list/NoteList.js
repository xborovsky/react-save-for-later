import React from 'react';
import PropTypes from 'prop-types';

import NoteListItem from '../note-list-item/NoteListItem';

const NoteList = ({notes, onDeleteNote}) =>
    <div className="row">
        <div className="col-12">
            <ul class="list-group">
                {notes.map(note =>
                    <div key={note.id} className="col-12">
                        <NoteListItem note={note} onDeleteNote={onDeleteNote} />
                    </div>
                )}
            </ul>
        </div>
    </div>
;

NoteList.propTypes = {
    notes : PropTypes.array.isRequired,
    onDeleteNote : PropTypes.func.isRequired
};

export default NoteList;