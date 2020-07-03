import React, { Component } from 'react'
import {connect} from 'react-redux';
import {authorSignin, loginInUser} from '../store/actions/AuthActions'
import {addFlashMessage} from '../store/actions/FlashMessages'
import { withRouter } from 'react-router';
import {isEmpty} from 'lodash';
import classnames from 'classnames'



 class SignIn extends Component {
    state = {
        email: '',
        author_password: '', 
        errors : {}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
      //  console.log(this.state)
    }

     validate = () => {
        let isErrors = false;
        let errors = {};

        if(isEmpty(this.state.email)){
            isErrors = true;
            errors.email = 'Email is required';
        }
        if((this.state.author_password.length < 6)){
            isErrors = true;
            errors.author_password = 'Password  must be at least 6';
        }
        if(isEmpty(this.state.author_password)){
            isErrors = true;
            errors.author_password = 'Password is required'
        }
        
        return {isErrors, errors}
     }

    handleSubmit = (e) => {
        e.preventDefault();

        let {isErrors, errors} = this.validate();
        if(isErrors){
            this.setState({
                errors
            })
        }
        else{
            let user = {
                email: this.state.email,
                author_password: this.state.author_password, 
            }
            this.props.authorSignin(user).then((res) => {
                this.setState({
                    errors: {}
                })
                if(res.data.includes('Email does not exist')){
                    this.props.addFlashMessage({
                        type: 'error',
                        text: 'Email does not exist' 
                    })
                }
                else if(res.data.includes("Wrong Password")){
                    console.log('res')
                    this.props.addFlashMessage({
                        type: 'error',
                        text: 'You entered wrong password' 
                    })
                }
                else{
                    this.setState({
                        email: '',
                        author_password: '', 
                    })
                    this.props.loginInUser(res.data)
                    this.props.history.push('/dashboard');
                }
                
            }).catch(err => console.log(err));

        }
      
    }

    render() {
        let {errors} = this.state
        return (
            <div className='signin '>
               <div className='contact-form '>
                  
                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <h2>Sign In</h2>
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.email})}>
                            <label>Email</label>
                            <input name='email' onChange={this.handleChange} value={this.state.email} className="form-control " />
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.author_password})}>
                            <label>Password</label>
                            <input name='author_password' onChange={this.handleChange} value={this.state.author_password} className="form-control "  type='password'/>
                            {errors.author_password && <span className='errors'>{errors.author_password}</span>}
                        </div>
                        <div  className="form-group">
                         <small className='form-text text-muted'>If you don't have an account click here to  <a href='/signup'>Sign up</a></small>
                        </div>
                       <div className="form-group">
                           <button type='submit' className='button  "'>SignIn</button>
                       </div>

                    </form>
                </div>
            </div>
        )
    }
}

const mapActionsToProps = {
    authorSignin,
    addFlashMessage,
    loginInUser
}

export default connect(null, mapActionsToProps)(withRouter(SignIn))
