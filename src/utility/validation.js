const validate = (val, rules) => {
    let isValid = true;
    for(let rule in rules) {
        switch(rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(val);
            case 'minLength':
                isValid: isValid && minLengthValidator(val, rules[rule]);
            case 'equalTo':
                isValid: isValid && equalToValidator(val, rules[rule]);
            default:
                isValid = true;
        }
    }
    return isValid;
}

const emailValidator = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
}

const minLengthValidator = (val, minLength) => {
    return validate.length >= minLength;
}

const equalToValidator = (val, checkValue) => {
   return val === checkValue;
}

export default validate;