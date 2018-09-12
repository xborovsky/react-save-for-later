import React, { Component } from 'react';
import { Form } from 'react-validify';
import { getAllCategories } from '../../api/category-api';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import WithLoaderComponent from '../../components/common/hoc/WithLoader';
import WithErrorHandlingComponent from '../../components/common/hoc/WithErrorHandling';
import { TextArea, Select } from '../../components/common/Input';
import { saveNoteThunk } from './redux/thunks';

class CreateNote extends Component {
    state = {
        categories : []
    };

    validationRules = {
        description : 'required|max:10000',
        category : 'required'
    };

    componentDidMount() {
        getAllCategories()
            .then(categories => this.setState({categories : categories.data}));
        if (this.descriptionInput) {
            this.descriptionInput.focus();
        }
    }

    handleSubmit = (values) => {
        this.props.createNote({
            description : values.description,
            category : values.category
        }).then(res => {
            if (!this.props.error) {
                this.navigateToList();
            }
        });
    };

    navigateToList = () => {
        this.props.history.push('/notes');
    };

    render() {
        const { categories } = this.state;
        const { loading, error } = this.props;

        return (
            <div>
                <h1>Create new note</h1>
                <WithLoaderComponent loading={loading}>
                    <WithErrorHandlingComponent error={error}>
                        <Form rules={this.validationRules}>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                                <div className="col-sm-10">
                                    <TextArea type="text" name="description" className="form-control" rows="10"
                                        id="description" reff={input => { this.descriptionInput = input; }} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="category" className="col-sm-2 col-form-label">Category:</label>
                                <div className="col-sm-10">
                                    <Select name="category" className="form-control" id="category">
                                        <option value="-1">Choose category</option>)
                                        { categories && categories.map(category =>
                                            <option value={category.id} key={category.id}>{category.name}</option>)
                                        }
                                    </Select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10 col-sm-offset-2">
                                    <button type="submit" className="btn btn-success" submit
                                            onClick={(values) => this.handleSubmit(values)}>Save</button>
                                </div>
                            </div>
                        </Form>
                    </WithErrorHandlingComponent>
                </WithLoaderComponent>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading : state.notes.loading,
    error : state.notes.error
});

const mapDispatchToProps = dispatch => ({
    createNote : (note) => dispatch(saveNoteThunk(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateNote));