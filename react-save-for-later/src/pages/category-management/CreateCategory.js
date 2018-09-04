import React, { Component } from 'react';

import { validate } from '../../utils/form-validator-util';
import Alert from '../../components/common/Alert';
import { saveNewCategory } from '../../api/category-api';

export default class CreateCategory extends Component {
    state = {
        valid : false,
        submitted : false,
        fields : {
            name : {
                value : '',
                valid : false,
                validations : {
                    minLength : 3,
                    maxLength : 50,
                    required : true
                }
            },
            color : {
                value : '',
                valid : false,
                validations : {
                    minLength : 6,
                    maxLength : 6,
                    required : true
                }
            }
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        const { fields } = this.state,
            validationErrors = validate(fields);
        let allValid = true;

        Object.entries(fields).map(field => {
            const err = validationErrors.indexOf(field[0]) > -1;

            allValid = allValid && !err;
            this.setState({...field, valid : !err});
        });

        this.setState({...this.state, valid: allValid, submitted : true});

        saveNewCategory(this.state.fields.name.value, this.state.fields.color.value)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    updateFieldValue = (field, e) => {
        const newValue = e.target.value;
        field.value = newValue;
        this.setState({field});
    };

    render() {
        const { valid, submitted, fields } = this.state;

        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                { submitted && !valid && <Alert type="danger" message="Some fields are invalid!" /> }
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={fields.name.value}
                               id="name" onChange={(e) => this.updateFieldValue(fields.name, e)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="color" className="col-sm-2 col-form-label">Color:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={fields.color.value}
                               id="color" onChange={(e) => this.updateFieldValue(fields.color, e)} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 col-sm-offset-2">
                        <button type="submit" className="btn btn-success">Save</button>
                    </div>
                </div>
            </form>
        );
    }

}

