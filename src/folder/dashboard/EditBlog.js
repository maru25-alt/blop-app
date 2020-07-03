import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {connect} from 'react-redux'
import {getAuthor, getAuthorBlogs} from '../../store/actions/AuthActions'
import {editBlog,postEditBlog, fetchAllCategories} from '../../store/actions/BlogsAction'
import {addFlashMessage} from '../../store/actions/FlashMessages'
import {isEmpty} from 'lodash';
import classnames from 'classnames'
import ImageViewer from '../forms/Profile'
import AddCategory from '../forms/AddCategory'
import RichText from '../forms/EditRichText'



export class EditBlog extends Component {
    state = {
        title: '',
        photo_url: '',
        category: '',
        body: '',
        errors: {
            title: '',
            cover_photo: '',
            category: '',
            body: '', 
        },
        addCategory: false
    }

    componentWillMount(){
        this.props.getAuthor(this.props.user.author_id);
        this.props.getAuthorBlogs(this.props.user.author_id);
        this.props.fetchAllCategories()
     }

     validate = (blog) => {
        let isError = false;
       const errors = {};

        if(isEmpty(blog.title)){
            isError = true;
            errors.title = 'Title is required';
        };

        if((blog.title.length < 5 && !(isEmpty(blog.title)))){
            isError = true;
            errors.title = 'Title should be at least 5 characters';
        }

        if(isEmpty(blog.cover_photo)){
            isError = true;
            errors.cover_photo = 'Cover photo is required';
        };

        if(isEmpty(blog.category_id)){
            isError = true;
            errors.category_id = 'Category is required';
        };

        if(isEmpty(blog.body)){
            isError = true;
            errors.body = 'Body is required';
        };

        if(!(isEmpty(blog.body)) && (blog.body.length < 50)){
            isError = true;
            errors.body = 'Body should be at least 50 characters';
        };

        return {errors, isError}
    
    }

    handleChange = (e) =>{
        let id = this.props.match.params.id;
        this.props.editBlog(id, e.target.id, e.target.value)
         this.setState({
             [e.target.id] : e.target.value
         })
    };
    handleChangeRichText = (e) => {
        let id = this.props.match.params.id;
        this.props.editBlog(id, 'body', e)
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id
        let blog = this.props.blogs.filter(blog => {
            return blog.post_id === id
       })
       blog = blog[0];
       let editBlog ={
           body: blog.body,
           category_id: blog.category_id,
           cover_photo: blog.cover_photo,
           title: blog.title

       } 


       let {errors, isError} = this.validate(editBlog)
      
       if(isError){
           this.setState({
               errors
           })
       }
       else{
        this.props.postEditBlog(id, editBlog).then(res => {
            console.log(res)
            if(res.data.includes('Post updated...')){
                let message = {
                    type: 'success',
                    text: 'Post successfully created'  
                  }
                  this.props.addFlashMessage(message);
                  this.props.history.push('/dashboard')
            }
            else{
                let message ={
                    type: 'error',
                    text: 'Post failed to create'
                };
                this.props.addFlashMessage(message)
            }
        })
       }
       
    }
    
    handleAddCategory = () => {
        this.setState({
            addCategory : !this.state.addCategory
        })
    }
    render() {
        let {errors} = this.state
        let id = this.props.match.params.id
        const blog = this.props.blogs.filter(blog => {
             return blog.post_id === id
        })
        let post = typeof(blog[0]) === 'undefined' ? this.state : blog[0];

        let categories = this.props.categories && this.props.categories.map(e => {
            return (
            <option value={e.category_id} key={e.category_id}>{e.name}</option>
            )
        })

        let addCategory = this.state.addCategory ? <AddCategory  onDelete={this.handleAddCategory}/> : ( <a onClick={this.handleAddCategory}  type='button'> <i className="fas fa-plus-circle"></i> add new Category</a>)
        return (
            <div className='createblog'>
                <h3>Edit  Blog</h3>
                <form onSubmit={this.handleSubmit} className='row'> 
                <div className={classnames("form-group col-md-8", {'has-errors': errors.body})}>
                    <RichText handleChange={this.handleChangeRichText}  body={post.body}/>
                    {errors.body && <span className='errors'>{errors.body}</span>}
                </div>
                <div className='col-md-4'>
                    <div className={classnames("form-group", {'has-errors': errors.title})}>
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                        <input type="text" onChange={this.handleChange} value={post.title} className="form-control" id="title" placeholder='blog title' required/>
                        {errors.title && <span className='errors'>{errors.title}</span>}
                        </div>
                    </div>
                    <div className={classnames("form-group", {'has-errors': errors.cover_photo})}>
                        <label htmlFor="photo_url" className="col-sm-5 col-form-label">Cover Photo</label>
                        <div className="col-sm-10">
                        <input  onChange={this.handleChange} type="text" value={post.cover_photo} className="form-control" id="cover_photo" required placeholder='enter the url of the image'/>
                        <ImageViewer  value = {post.cover_photo} style='blog-image'  onChange={this.handleChange} />
                        {errors.cover_photo && <span className='errors'>{errors.cover_photo}</span>}
                       
                        </div>
                    </div>
                   
                    <div className={classnames("form-group", {'has-errors': errors.category_id})}>
                        <label htmlFor="category_id" className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-10">
                        <select  onChange={this.handleChange} value={post.category_id} className="custom-select" id="category_id">
                                <option defaultValue >Choose...</option>
                                  {categories}
                                  
                       </select>
                           {addCategory}
                       {errors.category_id && <span className='errors'>{errors.category_id}</span>}
                    </div>
                    </div>
                    {/* <div className={classnames("form-group", {'has-errors': errors.body})}>
                        <label htmlFor="body" className="col-sm-2 col-form-label">Body</label>
                        <div className="col-sm-10">
                            <textarea  onChange={this.handleChange} value={post.body} id='body' placeholder='type here...' className="form-control"  rows='10'></textarea>
                            {errors.body && <span className='errors'>{errors.body}</span>}
                        </div>
                    </div> */}
                    <div className="form-group ">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                        <a type='button' href='/dashboard'  className="btn btn-danger">Cancel</a>
                
                        </div>
                    </div>
                </div>
               </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    blogs: state.authors.blogs,
    user: state.authors.user,
    blog: state.blogs.editBlog,
    categories : state.blogs.allCategories
})

const mapActionsToProps = {
    getAuthor,
    getAuthorBlogs,
    editBlog,
    postEditBlog,
    addFlashMessage,
    fetchAllCategories

}
export default connect(mapStateToProps, mapActionsToProps)(withRouter(EditBlog))
