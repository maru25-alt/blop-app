import React, { Component } from 'react'
import moment from 'moment'

export default class Featured extends Component {
    
    render() {

       let blogs =  this.props.blogs;
      let  blog = blogs && blogs.map( blog => {
          return(
              <div key={blog.post_id} className='col-xl-4 col-md-6 col-sm-12 featured'  >
                <img className='feature-image' src={blog.cover_photo} />
                 <div className='feature-content'>
                 <a style={{ textDecoration: 'none' }} href={`/blog/${blog.post_id}`}> <h4 className='featured-title'>{blog.title}</h4></a>
                 <a style={{ textDecoration: 'none' }} href={`/category/${blog.category_id}`}> <span className='featured-category category'>{blog.category}</span></a>
                  <h6 className='featured-date'><i className="fas fa-thumbs-up"></i> {blog.likes_num} &nbsp;  &nbsp; <i className="fas fa-calendar-day"></i> {moment(blog.created_on).format("DD/MM/YYYY")} &nbsp; &nbsp; by: {blog.author}</h6>
                 </div>
              </div>
          )
      });
        return (
            <div>
                <div className='row featured-container '>
                   {blog}
                </div>
            </div>
        )
    }
}
