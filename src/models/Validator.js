import validator from 'validator';
import {isEmpty} from 'lodash';


validator  = new FormValidator([
      {
        field: 'email',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Email is required'
      },
      { 
        field: 'email',
        method: validator.isEmail,
        validWhen: true,
        message: 'Email is invalid.'
      },
      {
          field: 'full_name',
          method: validator.isEmpty,
          validWhen: false,
          message: 'Full name is required'
      },
      {
        field: 'author_password',
        method: validator.isEmpty,
        validWhen: false,
        message: 'Password is required'
    },
    
    ])

function validateInput(data) {
    let errors = {};

    if(validator.isEmpty(data.email)){
        errors.email = 'Email is required';
    }

    if(validator.isEmpty(data.full_name)){
        errors.username = 'Fullname is required';
    }
    if(validator.isEmpty(data.author_password)){
        errors.password = 'Password  is required';
    }
    if(validator.isEmpty(data.confirm_password)){
        errors.confirm_password = 'Confirm password is required';
    }
    if(!validator.equals(data.password, data.confirm_password)){
        errors.confirm_password = 'Password must match';
    }

    if(validator.isEmpty(data.description)){
        errors.description = 'Description  is required';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}

export default  validateInput;