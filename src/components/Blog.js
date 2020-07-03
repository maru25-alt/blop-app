import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReadRichText from '../folder/forms/ReadRichTex'

export default class Blog extends Component {

    paragraphFilter = (p) =>{
        return p.substring(0, 400);
    }
    render() {
        console.log(this.props)
        let blog = this.props.blogs.map( blog => {
            return(
                <div key={blog.post_id} className='row blog-container'>
                    <div className='blog-image__container col-md-7 col-sm-12'>
                    <img src={blog.cover_photo} alt="800X800" width='300' />
                    </div>
                    <div className='blog-content__container col-md-5 col-sm-12'>
                          <Link style={{ textDecoration: 'none' }} to={`/blog/${blog.post_id}`}><h3 className='blog-title'>{blog.title}</h3></Link>
                         <a href='/category'> <span className='category'>{blog.category}</span></a>
                          <p><ReadRichText body={this.paragraphFilter(blog.body)}/>...</p>
                          <h6 className=''></h6>
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
