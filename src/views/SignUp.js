import React, { Component } from 'react'
import {connect} from 'react-redux';
import {authorSignup} from '../store/actions/AuthActions'
import {addFlashMessage} from '../store/actions/FlashMessages'
import { withRouter } from 'react-router';
import {isEmpty} from 'lodash';
import classnames from 'classnames'

 class SignUp extends Component {

    state = {
        full_name: '',
        email: '',
        author_password: '',
        confirm_password: '',
        description: '',
        errors: {},
    }

    validate = () => {
      let  isError = false;
      const errors = {
        full_name: "",
        description: "",
        confirm_password: "",
        email: "",
        author_password: ""
      };

    if(isEmpty(this.state.email)){
        isError = true;
        errors.email = 'Email is required';
    }

    if(isEmpty(this.state.full_name)){
        isError = true;
        errors.full_name = 'Fullname is required';
    }
    if(isEmpty(this.state.author_password)){
        isError = true;
        errors.author_password = 'Password  is required';
    }
    if((this.state.author_password.length < 6)){
        isError = true;
        errors.author_password = 'Password  must be at least 6';
    }
    if((this.state.confirm_password !== this.state.author_password)){
        isError = true;
        errors.confirm_password = 'Password must match';
    }
    if(isEmpty(this.state.confirm_password)){
        isError = true;
        errors.confirm_password = 'Confirm password is required';

        
    }
    
    if(isEmpty(this.state.description)){
        isError = true;
        errors.description = 'Description  is required';
    }
      return { isError, errors}
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
      
    }

    handleSubmit = (e) => {
        e.preventDefault();
       let  {isError, errors } = this.validate() ;
       if(isError){
        this.setState({
            errors: errors
        })   
       }
       else{
        this.setState({
            errors: {}
         })
        let user = {
            full_name: this.state.full_name,
            email: this.state.email,
            author_password: this.state.author_password,
            description: this.state.description,
           }
        this.props.authorSignup(user).then((res) => {
               if(res.data === "Another user is using this email"){
                  console.log(res)
                  let message = {
                    type: 'error',
                    text: 'Another user is using this email'  
                  }
                  this.props.addFlashMessage(message)
               }
               else{
                let message = {
                    type: 'success',
                    text: 'Account succefully created'  
                  }
               this.props.addFlashMessage(message)
               this.setState({
                    full_name: '',
                    email: '',
                    author_password: '',
                    confirm_password: '',
                    description: '',
               });
               this.props.history.push('/signin')
               }  
           })     
       }

    }
    render() {
       
        let {errors} = this.state
        return (
            <div className='signin '>
               <div className='contact-form '>
                    <h2>SignUp To Became An Author</h2>
                    <form onSubmit={this.handleSubmit}>
                       <div className={classnames("form-group", {'has-errors': errors.full_name})}>
                            <label htmlFor='name'>Full Name</label>
                            <input name='full_name' onChange={this.handleChange} value={this.state.full_name} className="form-control"  type='text'/>
                             {errors.full_name && <span className='errors'>{errors.full_name}</span>}
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.email})}>
                            <label>Email</label>
                            <input name='email' onChange={this.handleChange} value={this.state.email} className="form-control"  type='email'/>
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.author_password})}>
                            <label>Password</label>
                            <input name='author_password' onChange={this.handleChange} value={this.state.author_password} className="form-control"  type='password'/>
                            {errors.author_password && <span>{errors.author_password}</span>}
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.confirm_password})}>
                            <label>Confirm Password</label>
                            <input name='confirm_password' onChange={this.handleChange} value={this.state.confirm_password} className="form-control"  type='password'/>
                            {errors.confirm_password && <span>{errors.confirm_password}</span>}
                        </div>
                        <div className={classnames("form-group", {'has-errors': errors.description})}>
                            <label>Your Description</label>
                            <textarea name='description' onChange={this.handleChange} value={this.state.description}  className="form-control" rows='5'>
                            </textarea>
                            {errors.description && <span>{errors.description}</span>}
                        </div>
                        <div  className="form-group">
                        <small className='form-text text-muted'>If you already have an account click here to  <a href='/signin'>Signin</a></small>
                        </div>
                       <div className="form-group">
                           <button type='submit' className='button'>SignUp</button>
                       </div>

                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    signupMessage: state.blogs.signupMessage
})

const mapActionsToProps = {
    authorSignup : authorSignup,
    addFlashMessage: addFlashMessage
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SignUp))
