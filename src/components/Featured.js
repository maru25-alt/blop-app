import React, { Component } from 'react'
import moment from 'moment'

export default class Featured extends Component {
    
    render() {

       let blogs =  this.props.blogs;
      let  blog = blogs && blogs.map( blog => {
          return(
              <div key={blog.sys.id} className='col-xl-4 col-md-4 col-sm-12 featured'  >
                <img className='feature-image' src={blog.fields.photo.fields.file.url} alt="featured"/>
                 <div className='feature-content'>
                 <a style={{ textDecoration: 'none' }} href={`/blog/${blog.sys.id}`}> <h4 className='featured-title'>{blog.fields.title}</h4></a>
                 <a style={{ textDecoration: 'none' }} href={`/category/${blog.fields.category}`}> <span className='featured-category category'>{blog.fields.category}</span></a> <br></br>
                  <h6 className='featured-date'><i className="fas fa-thumbs-up"></i> {blog.fields.likesNum} &nbsp;  &nbsp; <i className="fas fa-calendar-day"></i> {moment(blog.sys.createdAt).format("DD/MM/YYYY")} &nbsp; &nbsp; </h6>
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
