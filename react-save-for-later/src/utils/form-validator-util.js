export const validate = (formFields) => {
    var invalidFields = [];

    Object.entries(formFields).map(field => {
        Object.entries(field[1].validations).map(validation => { // field value
            if (!validateField(field, validation)) {
                invalidFields.push(field[0]); // field name
            }
        });
    });

    return invalidFields;
};

const validateField = (field, validationRule) => {
    const value = field[1].value;

    switch (validationRule[0]) {
        case 'required':
            return value && value.trim().length;
        case 'minLength':
            return value && value.trim().length >= validationRule[1];
        case 'maxLength':
            return value && value.trim().length <= validationRule[1];
        default:
            return true;
    }
}