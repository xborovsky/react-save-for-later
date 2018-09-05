import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAllNotesThunk } from './redux/thunks';
import WithErrorHandlingComponent from '../../components/common/hoc/WithErrorHandling';
import WithLoaderComponent from '../../components/common/hoc/WithLoader';
import WithEmptyDataHandlingComponent from '../../components/common/hoc/WithEmptyDataHandling';

class Notes extends Component {

    componentDidMount() {
        this.props.fetchNotes();
    }

    navigateToCreateNew = () => {
        this.props.history.push('/notes/new');
    }

    render() {
        const { notes, loading, error } = this.props;

        return (
            <div className="container">
                <h1>Notes</h1>
                <WithLoaderComponent loading={loading}>
                    <WithErrorHandlingComponent error={error}>
                        <div className="container">
                            <div className="row">
                                <button className="btn btn-primary" onClick={() => this.navigateToCreateNew()} title="Click to create a new note">
                                    <i className="far fa-plus-square"></i> Create new
                                </button>
                            </div>
                            <WithEmptyDataHandlingComponent data={notes}>
                                TODO
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
    fetchNotes : () => dispatch(fetchAllNotesThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Notes));