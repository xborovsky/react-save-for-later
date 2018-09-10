import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

import Category from '../../category/Category';
import { urlify } from '../../../utils/url-util';

import './NoteListItem.css';

const NoteListItem = ({note, onDeleteNote}) =>
    <div className="row">
        <div className="col-10">
            <li className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                    <small><Moment format="DD.MM.YYYY HH:mm:ss">{ note.created }</Moment></small>
                    <div className="pull-right">
                        <i className="fas fa-trash-alt" onClick={() => onDeleteNote(note.id)} title="Delete note"></i>
                    </div>
                </div>
                <p className="mb-1">{ ReactHtmlParser(urlify(note.description)) }</p>
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
            hexColor : PropTypes.string
        }).isRequired,
        created : PropTypes.string
    }).isRequired,
    onDeleteNote : PropTypes.func.isRequired
};

export default NoteListItem;