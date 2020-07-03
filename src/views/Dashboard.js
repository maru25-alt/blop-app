import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect}  from 'react-redux'
import {getAuthor, getAuthorBlogs} from '../store/actions/AuthActions'
import  moment from 'moment'
import user_profile from '../images/photo-profile.jpeg'
import BlogList from '../folder/dashboard/BlogList'

 class Dashboard extends Component {

    componentWillMount(){
       this.props.getAuthor(this.props.user.author_id);
       this.props.getAuthorBlogs(this.props.user.author_id);
    }

    render() {
        let user = typeof(this.props.currentUser[0]) === 'undefined' ?
         {full_name: '', email: '', created_on: '', social_media: '', description: '', profile_picture: ''} : this.props.currentUser[0] ;
        let profile = user.profile_picture === 'NULL' ? user_profile  :user.profile_picture;
        return (
            <div className='dashboard'>
              <div className='dashboard-header row'> 
             
                <div className='col-8 '>
                  <img className='user_pic' src={profile} alt='profile'/>
                  <div className='row'>
                    <h5>{user.full_name}</h5>
                  </div>
                   <div className='row'>
                      <h5 >Email:</h5>
                      <p className='col-9'> {user.email}</p>
                   </div>
                   <div className='row'>
                     <h5>Social Account:</h5>
                     <p className='col-6'> {user.social_media}</p>
                    </div>
                   <div className='row'>
                    <h5>Joined On: </h5>
                    <p className='col-9'>{moment(user.created_on).format("Do MMM  YYYY")}</p>
                   </div>
                   <div className='row'>
                      <h5>Bio: </h5>
                     <p className='col-9'>{user.description}</p>
                   </div>
                  
                </div>
               <div  className='col-4'>
                   <button className='dashboard_button'><Link className='link' to='/editprofile'> Edit Profile </Link></button>
               </div>
               </div> 
               <div className='dashboard-body'>
                   <div className='row'>
                       <div className='col-8'>
                          <h3 >My Post</h3>
                       </div>
                       <div className='col-4'>
                         <button  className='dashboard_button'> <Link className='link'  to='/createblog'>Add New Post</Link>  </button>
                       
                   </div>

                   <div className='container'>
                       <BlogList  blogs={this.props.blogs} /> 
                   </div>
               </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authors.user,
    currentUser: state.authors.currentUser,
    blogs: state.authors.blogs
})

const mapActionsToProps = {
    getAuthor,
    getAuthorBlogs,
  

}

export default connect(mapStateToProps, mapActionsToProps)(Dashboard)
