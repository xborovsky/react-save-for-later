import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAllNotesThunk, deleteNoteThunk, filterNotesThunk } from './redux/thunks';
import { fetchCategoriesThunk } from '../category-management/redux/thunks';
import WithEmptyDataHandlingComponent from '../../components/common/hoc/WithEmptyDataHandling';
import NoteList from '../../components/note/note-list/NoteList';
import NoteSearch from './NoteSearch';
import Alert from '../../components/common/Alert';

class Notes extends Component {
    state = {
        instantSearchTimeout : null,
        filter : {
            search : '',
            categories : []
        }
    };

    componentDidMount() {
        this.props.filterNotes(0);
        this.props.fetchCategories();
    }

    navigateToCreateNew = () => {
        this.props.history.push('/notes/new');
    }

    handleDeleteNote = (id) => {
        // TODO lepsie
        if (window.confirm('Do you really want to delete the selected note?')) {
            this.props.deleteNote(id)
                .then(() => this.props.fetchNotes());
        }
    };

    handleInstantSearch = e => {
        this.props.resetOffset();
        const timeout = this.state.instantSearchTimeout;
        if (timeout) {
            clearInterval(timeout);
            this.setState({instantSearchTimeout : null});
        }

        const val = e.target.value;
        this.doSetFilterState(
            {search : val},
            () => {
                const newTimeout = setTimeout(() => {
                    this.doFilter();
                }, 250);
                this.setState({instantSearchTimeout : newTimeout});
            }
        );
    };

    handleSearchTextCleared = () => {
        this.props.resetOffset();
        this.doSetFilterState(
            {search : ''},
            () => {
                const newTimeout = setTimeout(() => {
                    this.doFilter();
                }, 250);
                this.setState({instantSearchTimeout : newTimeout});
            }
        );
    };

    handleCategoriesSelected = selectedValues => {
        this.props.resetOffset();
        var value = [];
        for (var i = 0, l = selectedValues.length; i < l; i++) {
            value.push(selectedValues[i].value);
        }
        this.doSetFilterState(
            {categories : value},
            () => {
                this.doFilter();
            }
        );
    };

    doFilter = () => {
        const { search, categories } = this.state.filter,
              { offset } = this.props;
        this.props.filterNotes(offset, search, categories);
    };

    doSetFilterState = (obj, callback) => {
        this.setState(prevState => ({
            ...prevState,
            filter : {
                ...prevState.filter,
                [Object.keys(obj)[0]] : Object.values(obj)[0]
                }
            }),
            () => callback()
        );
    };

    render() {
        const { notes, loading, error, categories, hasMoreRecords } = this.props;

        return (
            <div className="container main">
                <h1>Notes</h1>
                <NoteSearch
                    searchVal={this.state.filter.search}
                    allCategories={categories}
                    onInstantSearch={this.handleInstantSearch}
                    onCategoriesSelected={this.handleCategoriesSelected}
                    onSearchTextCleared={this.handleSearchTextCleared} />

                <div className="container">
                    {!error && !loading &&
                        <WithEmptyDataHandlingComponent data={notes}>
                            <NoteList notes={notes}
                                onDeleteNote={(id) => this.handleDeleteNote(id)} />
                        </WithEmptyDataHandlingComponent>
                    }
                    { error ? <Alert type="danger" message="Error loading data!" /> :
                        loading ? <i className="fa fa-spinner fa-spin"></i> :
                            hasMoreRecords && <button type="button" className="btn btn-primary"
                                onClick={() => this.doFilter()}>Load next...</button>
                    }
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    notes : state.notes.notes,
    loading : state.notes.loading,
    error : state.notes.error,
    offset : state.notes.offset,
    hasMoreRecords : state.notes.hasMoreRecords,
    categories : state.categories.categories
});

const mapDispatchToProps = dispatch => ({
    filterNotes : (offset, text, categories) => dispatch(filterNotesThunk(offset, text, categories)),
    deleteNote : id => dispatch(deleteNoteThunk(id)),
    fetchCategories : () => dispatch(fetchCategoriesThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Notes));