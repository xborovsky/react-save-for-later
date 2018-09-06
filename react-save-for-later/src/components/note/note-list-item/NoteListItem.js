import React from 'react';
import PropTypes from 'prop-types';
import Category from '../../category/Category';

const NoteListItem = ({note, onDeleteNote}) =>
    <div className="row">
        <div className="col-10">
            <li class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                    <small>{ note.created }</small>
                    <div className="pull-right">
                        <i className="fas fa-trash-alt" onClick={() => onDeleteNote(note.id)} title="Delete note"></i>
                    </div>
                </div>
                <p class="mb-1">{ note.description }</p>
                <small><Category name={note.category.name} hexColor={note.category.colorHex} /></small>
            </li>
        </div>
    </div>
;

NoteListItem.propTypes = {
    note : PropTypes.shape({
        id : PropTypes.number,
        description : PropTypes.string,
        category : PropTypes.shape({
            id : PropTypes.number,
            name : PropTypes.string,
            hexColor : PropTypes.string.isRequired
        }).isRequired,
        created : PropTypes.string
    }).isRequired,
    onDeleteNote : PropTypes.func.isRequired
};

export default NoteListItem;