import React, { Component } from 'react'
import moment from 'moment'
import { PropTypes } from 'prop-types';


class RecentPost extends Component {
    render() {
        let blog = this.props.blogs && this.props.blogs.map( blog => {
            return (
                <div key={blog.post_id} className='container recent-blog__container'>
                  <div className='recent-blogs__upper row'>
                        <div className=' col-sm-12'>
                          <a  style={{ textDecoration: 'none' }}  href={`/blog/${blog.post_id}`}> <h5 className="recent-title">{blog.title}</h5></a>
                          <span className='recent-date'> {moment(blog.created_on).format("DD/MM/YYYY")}</span>
                        </div> 
                        <div className='col-sm-12'>
                        <img src={blog.cover_photo} alt="800X800" width='150'/> 
                        </div>  
                        
                  </div> 
                </div>
            )
        })
        return (
            <div>
                <h3>Recent Post</h3>
                <div>
                    {blog}
                </div>
            </div>
        )
    }
}


RecentPost.propTypes = {
    blogs: PropTypes.array.isRequired
  };


  export default  RecentPost