import React, { Component } from 'react'
import img from  '../../images/blog8.png'
import moment from 'moment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class Comments extends Component {
    render() {
     
        let comments = this.props.comments;
        console.log(this.props.comments.length)
        if(comments.length === 0){
            return(
                <div>
                <div  className='heading'><span>{this.props.comments.length} Comments</span></div>  
                <p>There are no comments yet... Be the first to leave a comment</p>
                </div>
            )
        }
        // <img className='comment-image' src={img} alt="400X400" width='150' />
        return (
            <div className='comments'>
              <div  className='heading'><span>{this.props.comments.length} Comments</span></div>  
              <div className='comments__container'>
                 {comments && comments.map(e =>{
                     var profile = e.email.charAt(0).toUpperCase();
                    return(
                        <div className='row comment' key={e.comment_id}>
                        <div className='col-sm-2 '><div className='comment-image' > {profile} </div></div>
                        <div className='col-sm-10'>
                            <h5>{e.email} </h5>
                            <span> {moment().startOf(e.created_on).fromNow()} </span>
                            <p>{e.comment_text}</p>
                            <button className='btn btn-sm btn-success'>Reply</button>
                        </div>
                    </div>
                    )
        })}  
              </div>
            </div>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired
  };
const mapStateToProps = (state) => ({
   
    comments: state.blogs.comments,
    
})

export default connect(mapStateToProps)(Comments)