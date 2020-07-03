import React, { Component } from 'react'
import SingleBlogPost from '../folder/singleblog/SingleBlogPost' 
import Sidebar from '../components/Sidebar'
import AboutAuthor from '../components/AboutAuthor'
import Featured from '../components/Featured'
import Comments from '../folder/singleblog/Comments' 
import ReplyForm from '../folder/singleblog/ReplyForm'
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import {fetchComments, fetchFeatured, fetchAuthor, fetchBlog } from '../store/actions/BlogsAction';
import {addFlashMessage} from '../store/actions/FlashMessages'
import {addComment} from '../store/actions/User'
import {addUser} from '../store/actions/User'

 class Blog extends Component {
    constructor(props) {
        super(props)
               this.state = {
                id: this.props.match.params.id,
        }
    }
    componentWillMount(){
    this.props.fetchComments(this.state.id);
    this.props.fetchFeatured(); 
    this.props.fetchAuthor(this.state.id); 
    this.props.fetchBlog(this.state.id); 
    
    }
    
   
    render() {
        const post_id  = typeof(this.props.blog[0]) === 'undefined' ? '' : this.props.blog[0].post_id
        
        console.log(post_id)
        return (
            <div className='single-blog'>
                <div className='row'>
                    <div className='col-md-8 col-sm-12'>
                       <SingleBlogPost blog= {this.props.blog} />
                    </div>
                    <div className='col-md-4 col-sm-12 sidebar__container'> <Sidebar/></div>
                </div>
                <div>
                    <AboutAuthor author ={this.state.author} prop={this.props.author}/>
                    <div className='single-featured'>
                    <div className='heading'>  <span >You may also like</span></div>
                       <Featured blogs= {this.props.featured}/>
                    </div>
                    <Comments />
                    <ReplyForm post_id = {post_id} fetchComments={this.props.fetchComments} addFlashMessage={this.props.addFlashMessage} addUser={this.props.addUser}  addComment={this.props.addComment}/>

                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    featured : state.blogs.featured, 
    blog : state.blogs.blog,
    category : state.blogs.category,
    comments: state.blogs.comments,
    author : state.blogs.author
})

const mapActionToProps = {
    fetchComments :fetchComments, 
    fetchFeatured : fetchFeatured,
    fetchAuthor : fetchAuthor,
    fetchBlog : fetchBlog,
    addComment,
    addFlashMessage,
    addUser,
}

export default connect(mapStateToProps, mapActionToProps)(withRouter(Blog));