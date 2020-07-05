import React, { Component } from 'react'
import moment from 'moment'
import { PropTypes } from 'prop-types';


class RecentPost extends Component {
    render() {
        let blog = this.props.blogs && this.props.blogs.map( blog => {
            return (
                <div key={blog.sys.id} className='container recent-blog__container'>
                          <a  style={{ textDecoration: 'none' }}  href={`/blog/${blog.sys.id}`}> 
                          <h5 className="recent-title">{blog.fields.title}</h5>
                          <p  className='recent-date'> {moment(blog.sys.createdAt).format("DD/MM/YYYY")}</p>
                         <img src={blog.fields.photo.fields.file.url} alt="800X800" className="image"/> 
                      </a>
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