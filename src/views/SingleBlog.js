import React, { Component } from 'react'
import SingleBlogPost from '../folder/singleblog/SingleBlogPost' 
import Sidebar from '../components/Sidebar'
import AboutAuthor from '../components/AboutAuthor'
import Featured from '../components/Featured'
import Comments from '../folder/singleblog/Comments' 
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { fetchFeatured, fetchAuthor, fetchBlog} from '../store/actions/BlogsAction';
import {addUser} from '../store/actions/User'
import PropTypes from 'prop-types'

 class Blog extends Component {
    constructor(props) {
        super(props)
               this.state = {
                id: this.props.match.params.id,
        }
    }
    componentWillMount(){
    this.props.fetchFeatured(); 
   this.props.fetchAuthor(); 
    this.props.fetchBlog(this.state.id); 
    
    }
    
   
    render() {
        return (
            <div className='single-blog'>
                <div className='row'>
                    <div className='col-md-8 col-sm-12'>
                       <SingleBlogPost blog= {this.props.blog} />
                    </div>
                    <div className='col-md-4 col-sm-12 sidebar__container'> <Sidebar/></div>
                </div>
                <div>
                    <AboutAuthor />
                    <div className='single-featured'>
                    <div className='heading'>  <span >You may also like</span></div>
                       <Featured blogs= {this.props.featured}/>
                    </div>
                    {/* <Comments /> */}
                  

                </div>


            </div>
        )
    }
}
Blog.propTypes ={
    blog : PropTypes.array.isRequired,

   };

const mapStateToProps = (state) => ({
    featured : state.blogs.featured, 
    blog : state.blogs.blog,
    category : state.blogs.category,
    comments: state.blogs.comments,
    author : state.blogs.author
})

const mapActionToProps = {
    fetchFeatured : fetchFeatured,
    fetchAuthor : fetchAuthor,
    fetchBlog : fetchBlog,
    addUser,
}

export default connect(mapStateToProps, mapActionToProps)(withRouter(Blog));