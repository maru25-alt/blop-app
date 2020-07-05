import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { PropTypes } from 'prop-types';
export default class Blog extends Component {

    paragraphFilter = (p) =>{
        return p.substring(0, 100);
    }
    render() {
        
        let blog = this.props.blogs.map( blog => {
            return(
            <div  key={blog.sys.id} className=' blog-container'>
                <div className='row'>
                    <div className=' col-md-4 col-sm-12'>
                    <img className="image" src={blog.fields.photo.fields.file.url} alt="800X800" />
                    </div>
                    <div className='blog-content__container col-md-8 col-sm-12'>
                          <Link style={{ textDecoration: 'none' }} to={`/blog/${blog.sys.id}`}><h3 className='blog-title'>{blog.fields.title}</h3></Link>
                         <a href={`/category/${blog.fields.category}`}> <span className='category'>{blog.fields.category}</span></a>
                          <p>{this.paragraphFilter(blog.fields.subBody)}...</p>
                      
                    </div>
                </div>
            </div>
            )
        })
        return (
            <div className='blogs_container'>
                {blog}
            </div>
        )
    }
}

Blog.propTypes = {
    blogs: PropTypes.array.isRequired
  };