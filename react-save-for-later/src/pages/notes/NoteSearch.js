import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const NoteSearch = ({allCategories, onInstantSearch, onCategoriesSelected}) =>
    <form>
        <div className="row">
            <div className="col-12 col-md-6">
                <input type="text" className="form-control" placeholder="search..." onChange={(e) => onInstantSearch(e)} />
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
    allCategories : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number,
            name : PropTypes.string
        })
    ),
    onInstantSearch : PropTypes.func.isRequired,

};