import React, { Component } from 'react'
import Delete from './DeleteBlog'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import ReadRichText from '../forms/ReadRichTex'


export class Blog extends Component {

    paragraphFilter = (p) =>{
        return p.substring(0, 1500);
    }

    getEditBlogFun = (id) => {
        console.log('clicked')
        this.props.getEditBlog(id)
    }


    render() {
        let blog = this.props.blog
        return (
           <div className="blog__container">
            <div className='blog-image__container '>
            <img src={blog.cover_photo} alt="800X800" width='400' />
            </div>
            <div className='blog-content__container' >
                 <h4 className='blog-title'>{blog.title}</h4>
                 <a href='/category'> <span className='category'>{blog.category}</span></a>
                  <p>
                      <ReadRichText body={this.paragraphFilter(blog.body)}/>...
                  </p>
                  
            </div>
            <div className='row'>
                <Link to={`/editBlog/${blog.post_id}`}>   <button type="button" className="btn m-3 btn-primary">Edit </button></Link>
           
                <Delete id={blog.post_id}/>
            </div>
        </div>
        )
    }
}

export default Blog
