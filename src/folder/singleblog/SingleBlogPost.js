import moment from 'moment'
import React from 'react'
import ReadRichText from '../forms/ReadRichTex'


const SingleBlog = ({blog}) => {
   
 
  return (
    <>
       {blog && blog.map(blog => {
      
        return(
        <div key={blog.post_id} className='blog__container'>
              <div className='blog-header'>
                   <h1 className='blog-title'>{blog.title}</h1>
                   <span className='category'>{blog.name}</span> 
                   <h6 className='date'>{moment(blog.created_on).format('Do  MMMM  YYYY')}  / BY {blog.author} / <i className="fas fa-eye"></i> {blog.likes_num}</h6>

                   <div className='blog-share row'>
                       <button className='btn btn-primary col-sm-12 col-md-3'> Share on Facebook</button> &nbsp; &nbsp; &nbsp;
                       <button className='btn btn-primary col-sm-12 col-md-3'> Share on Twitter</button>&nbsp; &nbsp;&nbsp;
                       <button className='btn btn-primary col-sm-12 col-md-3'> Share on Instagram</button>
                   </div>
                </div>
                <div className='blog-body'>
                   <img src={blog.cover_photo} alt="800X800"  width='560' height='460'/> 
                   <br></br>
                   <ReadRichText body={blog.body}/>
                    {/* <p>{blog.body}</p>  */}
                </div> 
        </div>
        )
      })} 

      
    </>
  )
}



export default (SingleBlog)

