import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAllNotesThunk, deleteNoteThunk, filterNotesThunk } from './redux/thunks';
import { fetchCategoriesThunk } from '../category-management/redux/thunks';
import WithErrorHandlingComponent from '../../components/common/hoc/WithErrorHandling';
import WithLoaderComponent from '../../components/common/hoc/WithLoader';
import WithEmptyDataHandlingComponent from '../../components/common/hoc/WithEmptyDataHandling';
import NoteList from '../../components/note/note-list/NoteList';
import NoteSearch from './NoteSearch';

class Notes extends Component {
    state = {
        instantSearchTimeout : null,
        filter : {
            search : '',
            categories : []
        }
    };

    componentDidMount() {
        this.props.fetchNotes();
        this.props.fetchCategories();
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

    handleInstantSearch = e => {
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
        const { search, categories } = this.state.filter;
        if ((search && search.trim().length) ||
            (categories && categories.length)) {
            this.props.filterNotes(search, categories);
        } else {
            this.props.fetchNotes();
        }
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
        const { notes, loading, error, categories } = this.props;

        return (
            <div className="container main">
                <h1>Notes</h1>
                <NoteSearch
                    searchVal={this.state.filter.search}
                    allCategories={categories}
                    onInstantSearch={this.handleInstantSearch}
                    onCategoriesSelected={this.handleCategoriesSelected}
                    onSearchTextCleared={this.handleSearchTextCleared} />
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
    error : state.notes.error,
    categories : state.categories.categories
});

const mapDispatchToProps = dispatch => ({
    fetchNotes : () => dispatch(fetchAllNotesThunk()),
    filterNotes : (text, categories) => dispatch(filterNotesThunk(text, categories)),
    deleteNote : id => dispatch(deleteNoteThunk(id)),
    fetchCategories : () => dispatch(fetchCategoriesThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Notes));