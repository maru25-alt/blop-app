import moment from 'moment'
import React, {Component} from 'react'
import RichTextToReact from 'rich-text-to-react';
import PropTypes from 'prop-types'

 
class SingleBlog extends Component {
  shareFacebook = (e) =>{
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
    if(facebookWindow.focus) { facebookWindow.focus(); }
      return false;
  }

  shareTwitter = (e) => {
    e.preventDefault();
   var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
    if(twitterWindow.focus) { twitterWindow.focus(); }
      return false;
    }

render() {
  return ( 
    <>
       {this.props.blog && this.props.blog.map(blog => {
        return(
        <div key={blog.sys.id} className='blog__container'>
              <div className='blog-header'>
                   <h1 className='blog-title'>{blog.fields.title}</h1>
                   <a href={`/category/${blog.fields.category}`} className='category'>{blog.fields.category}</a> 
                   <h6 className='date'>{moment(blog.sys.createdAt).format('Do  MMMM  YYYY')}   / <i className="fas fa-eye"></i> {blog.fields.likesNum}</h6>

                   <div className='blog-share row'>
                       <button onClick={this.shareFacebook} className='btn btn-primary col-sm-12 col-md-4'> Share on Facebook</button> &nbsp; &nbsp; &nbsp;
                       <button onClick={this.shareTwitter} className='btn btn-primary col-sm-12 col-md-4'> Share on Twitter</button>&nbsp; &nbsp;&nbsp;
                      
                   </div>
                </div>
                <div className='blog-body'>
                   <img src={blog.fields.photo.fields.file.url} alt="800X800"  width='560' height='460'/> 
                   <br></br>
                      <RichTextToReact document={blog.fields.body} />
                </div> 
        </div>
        )
      })} 

      
    </>
  )
}
}

SingleBlog.propTypes ={
 blog : PropTypes.array.isRequired

};

export default (SingleBlog)

