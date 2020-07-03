import React, { Component } from 'react'

import Featured from '../components/Featured'
import Blogs from '../components/Blog'
import Pagination from '../components/Pagination'


import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import {fetchBlogs, fetchFeatured } from '../store/actions/BlogsAction';


import SideBar from '../components/Sidebar'

class Home extends Component {
    
    componentWillMount(){
        this.props.fetchBlogs();
        this.props.fetchFeatured();
        
    }

    render() {
       console.log(this.props.featured)
        return (
            <section className='home'>
                <div className='feature__container'>
                  <Featured blogs={this.props.featured}/>
                </div>
                <div className='row home-body__container' >
                  <div className='blogs__container col-xl-8 col-md-8 col-sm-12'>
                       <Blogs blogs={this.props.blogs}/>
                       <Pagination  blogs_num={this.props.blogs.length}/>
                  </div>
                  <div className='sidebar__container col-xl-4 col-md-4 col-sm-12'>
                     <SideBar/>
                  </div>
                </div>
                
                
            </section>
        )
    }
}


const mapStateToProps = state => ({
    blogs : state.blogs.blogs,
    featured: state.blogs.featured
})

const mapActionToProps  = {
    fetchBlogs: fetchBlogs,
    fetchFeatured: fetchFeatured,
}

export default connect(mapStateToProps, mapActionToProps)(Home);