import React, { Component } from 'react'
import { withRouter } from "react-router";
import {fetchCategoryBlogs} from '../store/actions/BlogsAction'
import {connect} from 'react-redux'
import Blogs from '../components/Blog'
import Pagination from '../components/Pagination'
import SideBar from '../components/Sidebar'
 class Category extends Component {

    componentWillMount(){
        this.props.fetchCategoryBlogs(this.props.match.params.id)
    }
   
    render() {
        console.log(this.props)
        return (
            <div>
                 <div className='row home-body__container' >
                  <div className='blogs__container col-xl-8 col-md-8 col-sm-12'>
                       <Blogs blogs={this.props.blogs}/>
                       <Pagination  blogs_num={this.props.blogs.length}/>
                  </div>
                  <div className='sidebar__container col-xl-4 col-md-4 col-sm-12'>
                     <SideBar/>
                  </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blogs : state.blogs.categoryBlogs
})


export default connect(mapStateToProps, {fetchCategoryBlogs})(withRouter(Category))