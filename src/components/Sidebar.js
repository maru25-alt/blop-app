import React, { Component } from 'react'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Recent from '../components/RecentPost'
import {connect} from 'react-redux'
import {fetchRecentBlogs, fetchCategory} from '../store/actions/BlogsAction'


 class SideBar extends Component {
    

    componentWillMount(){
       this.props.fetchRecentBlogs();
       this.props.fetchCategory();
    }
    render() {
      
        return (
            <>
                    <div className='search__container'>
                         <Search />
                     </div>
                     <div className='recent-blogs__container'>
                         <Recent blogs={this.props.recentBlogs}/>
                     </div>
                     <div className='category__contanier'>
                         <Categories categories={this.props.category}></Categories>
                         </div>
           </> 
        )
    }
}

const mapStateToProps = (state) => ({
    recentBlogs : state.blogs.recentBlogs,
    category: state.blogs.category
})

const mapActionToProps = {
    fetchRecentBlogs: fetchRecentBlogs,
    fetchCategory: fetchCategory
}

export default connect(mapStateToProps, mapActionToProps)(SideBar)