import React, { Component } from 'react'
import {isEmpty} from 'lodash';
import classnames from 'classnames'
import SocialMedia from './SocialMedia'
import Profile from './Profile'


export class EditProfileForm extends Component {
    state = {
        user: this.props.user,
        errors: {
            full_name: '',
            email: '',
            description: '',
            social_media: '',
            profile_picture: '',
        }, 
        numSocial: 1,
       
    }


    validate = (user) => {
        let isError = false;
       const errors = {};

        if(isEmpty(user.full_name)){
            isError = true;
            errors.full_name = 'Full name is required';
        };

        if((user.full_name.length < 5 && !(isEmpty(user.full_name)))){
            isError = true;
            errors.full_name = 'Full name should be at least 5 characters';
        }

        if(isEmpty(user.email)){
            isError = true;
            errors.email = 'email is required';
        };

        if(isEmpty(user.description)){
            isError = true;
            errors.description = 'Description is required';
        };
        return {errors, isError} 
    }

    handleChange = (e) => {
        this.props.onEdit(e.target.id, e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let user =  this.props.user
        let {errors, isError} = this.validate(user)
        if(isError){
            this.setState({
                errors
            })
        }
        else{
            this.props.onSubmit();
        }     
    }

    handleAddProfile = () => {
      
        this.setState({
            numSocial: this.state.numSocial + 1
        })
        
    }

   onDelete = () => {
        // social.splice(id, 1)
      this.setState({
        numSocial: this.state.numSocial - 1
      })
     }

    render() {
        let user =  this.props.user
        let {errors} = this.state
      
        let social = [];
        for(var i = 0; i < this.state.numSocial; i++){
           social.push(<SocialMedia  key={i} id={i} onDelete={this.onDelete}/>)
        }
       
       
        return (
            <div className='editForm_container'>
                <h3>Edit Profile</h3>
                <form >
                <div  className={classnames("form-group", {'has-errors': errors.full_name})}>
                    <label htmlFor="full_name">Full Name</label>
                    <input onChange={this.handleChange}  className="form-control" value={user.full_name} id="full_name"/>
                    {errors.full_name && <span className='errors'>{errors.full_name}</span>}
                </div>
                <div className={classnames("form-group", {'has-errors': errors.email})}>
                    <label htmlFor="email">Email </label>
                    <input   onChange={this.handleChange} type="email" className="form-control" value={user.email} id="email" />
                    {errors.email && <span className='errors'>{errors.email}</span>}
                </div>
                <div className={classnames("form-group", {'has-errors': errors.description})}>
                    <label  htmlFor="description">Description</label>
                    <textarea  onChange={this.handleChange} className="form-control" id='description' value={user.description}></textarea>
                    {errors.description && <span className='errors'>{errors.description}</span>}
                </div>
                <div className= "form-group">
                    <label   htmlFor="social_media">Social Links</label>
                    <input  onChange={this.handleChange} type="text" className="form-control" id="social_media" value={user.social_media}/>
                   <div className='social_container'>
                      {social}
                   </div>    
                 <a  onClick={this.handleAddProfile}> <i className="fas fa-plus-circle"></i> add social profile</a>
                  
                </div>
                <div className= "form-group">
                    <label htmlFor="profile_picture">Profile Url</label>
                    <input  onChange={this.handleChange} type="text" className="form-control" id="profile_picture" value={user.profile_picture}/>
                    <Profile style='user_pic'  onChange={this.handleChange}  value={user.profile_picture} />
                </div>
                <div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Save Changes</button>
                    <a type='button' href='/dashboard'  className="btn btn-danger">Cancel</a>
                </div>
                </form>
            </div>
           
        )
    }
}

export default EditProfileForm
