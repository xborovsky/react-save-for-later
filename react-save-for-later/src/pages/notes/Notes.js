import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAllNotesThunk, deleteNoteThunk } from './redux/thunks';
import WithErrorHandlingComponent from '../../components/common/hoc/WithErrorHandling';
import WithLoaderComponent from '../../components/common/hoc/WithLoader';
import WithEmptyDataHandlingComponent from '../../components/common/hoc/WithEmptyDataHandling';
import NoteList from '../../components/note/note-list/NoteList';

class Notes extends Component {

    componentDidMount() {
        this.props.fetchNotes();
    }

    navigateToCreateNew = () => {
        this.props.history.push('/notes/new');
    }

    handleDeleteNote = (id) => {
        if (window.confirm('Do you really want to delete the selected note?')) {
            this.props.deleteNote(id)
                .then(() => this.props.fetchNotes());
        }
    };

    render() {
        const { notes, loading, error } = this.props;

        return (
            <div className="container">
                <h1>Notes</h1>
                <WithLoaderComponent loading={loading}>
                    <WithErrorHandlingComponent error={error}>
                        <div className="container">
                            <WithEmptyDataHandlingComponent data={notes}>
                                <NoteList notes={notes}
                                    onDeleteNote={(id) => this.handleDeleteNote(id)} />
                            </WithEmptyDataHandlingComponent>
                        </div>
                    </WithErrorHandlingComponent>
                </WithLoaderComponent>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    notes : state.notes.notes,
    loading : state.notes.loading,
    error : state.notes.error
});

const mapDispatchToProps = dispatch => ({
    fetchNotes : () => dispatch(fetchAllNotesThunk()),
    deleteNote : id => dispatch(deleteNoteThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Notes));