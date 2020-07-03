import React, { Component } from 'react'
import EditForm from '../forms/EditProfileForm'
import {connect} from 'react-redux'
import {editProfile, changeProfile} from '../../store/actions/AuthActions'
import {addFlashMessage} from  '../../store/actions/FlashMessages'
import { withRouter } from 'react-router';


export class EditProfile extends Component {
    state = {
        full_name: '',
        email: '',
        description: '',
        social_media: '',
        profile_picture: '',
    }
    handleChange = (id, value) => {
        this.props.editProfile(id, value)
    
    }

    onSubmit = () => {
        console.log(this.props.currentUser[0])
        this.props.changeProfile(this.props.currentUser[0]).then(res =>{
            console.log(res)
            if(res.data.includes('This email is already in use by another account')){
                this.props.addFlashMessage({
                    type: 'error',
                    text: res.data
                })
            }

            if(res.data.includes('successfully updated')){
                this.props.addFlashMessage({
                    type: 'success',
                    text: res.data
                })

                this.props.history.push('/dashboard')
            }
            
           
        })
    } 

    render() {
        let user = typeof(this.props.currentUser[0]) === 'undefined' ? this.state :this.props.currentUser[0]
        
        return (

            <>
               <EditForm  user={user}  onEdit={this.handleChange} onSubmit = {this.onSubmit}/>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    currentUser: state.authors.currentUser
})

const mapActionsToProps = {
    editProfile,
    changeProfile,
    addFlashMessage
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(EditProfile))
