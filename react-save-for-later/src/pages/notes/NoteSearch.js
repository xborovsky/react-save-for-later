import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const NoteSearch = ({searchVal, allCategories, onInstantSearch, onCategoriesSelected, onSearchTextCleared}) =>
    <form>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="search..." onChange={(e) => onInstantSearch(e)} value={searchVal} />
                    <div className="input-group-append">
                        <button className="btn" type="button" onClick={onSearchTextCleared}><i className="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                { allCategories && allCategories.length ?
                    <Select placeholder="Categories" onChange={(selectedValues) => onCategoriesSelected(selectedValues)} isMulti
                        options={allCategories.map(category =>
                            ({ value: category.id, label : category.name })
                        )} /> : null }
            </div>
        </div>
    </form>
;

export default NoteSearch;

NoteSearch.propTypes = {
    searchVal : PropTypes.string,
    allCategories : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number,
            name : PropTypes.string
        })
    ),
    onInstantSearch : PropTypes.func.isRequired,
    onCategoriesSelected : PropTypes.func.isRequired,
    onSearchTextCleared : PropTypes.func.isRequired
};