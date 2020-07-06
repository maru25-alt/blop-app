import moment from 'moment'
import React, {Component} from 'react'
import RichTextToReact from 'rich-text-to-react';
import PropTypes from 'prop-types'

 
class SingleBlog extends Component {
  state = {
    likes : false,
    likeNum: 0,
    active : false
  }
  shareFacebook = (e) =>{
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?url=' + document.URL, 'facebook-popup', 'height=350,width=600');
    if(facebookWindow.focus) { facebookWindow.focus(); }
      return false;
  }

  shareTwitter = (e) => {
    e.preventDefault();
   var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=350,width=600');
    if(twitterWindow.focus) { twitterWindow.focus(); }
      return false;
    }

    handleLikes = (e) => {
      let status = this.state.likes
      this.setState({
       likes : !this.state.likes,
       likeNum: status ? 0 : 1,
       active: true,  
      })
    }
    componentDidUpdate(prevProps, prevState) {
      if (this.state.active) {
        // when the state is updated (turned red), 
        // a timeout is triggered to switch it back off
        setTimeout(() => { 
          this.setState(() => ({active: false}))
        }, 500);
      }
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
                   <img src={blog.fields.photo.fields.file.url} alt="800X800" className='image'  /> 
                   <br></br>
                      <RichTextToReact document={blog.fields.body} />
                </div> 
               <button onClick={this.handleLikes} className={this.state.active ? 'btn bubbly-button animate' :'btn bubbly-button'}>{blog.fields.likesNum + this.state.likeNum} <i className={this.state.likes ?"fas fa-heart fa-1x" : "far fa-heart fa-1x animate"}></i> </button>
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

