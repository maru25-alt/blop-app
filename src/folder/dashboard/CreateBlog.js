import React, { Component } from 'react'
import {createBlog} from '../../store/actions/BlogsAction'
import { connect } from 'react-redux'
import {isEmpty} from 'lodash';
import classnames from 'classnames'
import {addFlashMessage} from '../../store/actions/FlashMessages'
import { withRouter } from 'react-router';
import ImageViewer from '../forms/Profile'
import { fetchAllCategories} from '../../store/actions/BlogsAction'
import AddCategory from '../forms/AddCategory'
import RichText from '../forms/RichText'



export class CreateBlog extends Component {
    state = {
        title: '',
        cover_photo: '',
        category: '',
        body: '',
        errors: {
            title: '',
            cover_photo: '',
            category: '',
            body: '',
        },
        addCategory : false,
        editorState : '',
    }

    componentWillMount(){
        this.props.fetchAllCategories()
    }

    validate = () => {
        let isError = false;
       const errors = {};

        if(isEmpty(this.state.title)){
            isError = true;
            errors.title = 'Title is required';
        };

        if((this.state.title.length < 5 && !(isEmpty(this.state.title)))){
            isError = true;
            errors.title = 'Title should be at least 5 characters';
        }

        if(isEmpty(this.state.cover_photo)){
            isError = true;
            errors.cover_photo = 'Cover photo is required';
        };

        if(isEmpty(this.state.category)){
            isError = true;
            errors.category = 'Category is required';
        };

        if(isEmpty(this.state.editorState)){
            isError = true;
            errors.body = 'Body is required';
        };

        // if(!(isEmpty(this.state.editorState))){
        //     isError = true;
        //     errors.body = 'Body should be at least 50 characters';
        // };

        return {errors, isError}
    
    }

    handleChange = (e) =>{
         this.setState({
             [e.target.id] : e.target.value,
            
         })
    };
    handleRichTextChange = (editorState) => {
        this.setState({
            editorState
        })
       
    }
    

    handleSubmit = (e) => {
        e.preventDefault(); 
       let {errors, isError} = this.validate();
       if(isError){
           console.log('errors', errors)
           this.setState({
               errors: errors
           })
       }
       else{
        let blog = {
            title: this.state.title,
            cover_photo: this.state.cover_photo,
            category_id: this.state.category,
            body: this.state.editorState,
            author_id: this.props.user.author_id,
            post_status: true
          }
          console.log(blog)
          this.props.createBlog(blog).then(res => {
            console.log(res)
            if(res.data){
              if(res.data.includes('blog added')){
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
        let {errors} = this.state;
        let categories = this.props.categories && this.props.categories.map(e => {
            return (
            <option value={e.category_id} key={e.category_id}>{e.name}</option>
            )
        })

        let addCategory = this.state.addCategory ? <AddCategory  onDelete={this.handleAddCategory}/> : ( <a onClick={this.handleAddCategory}  type='button'> <i className="fas fa-plus-circle"></i> add new Category</a>)
       
        return (
            <form className='row'>
               <div className={classnames('col-sm-12 col-md-8', {'has-errors': errors.body})} >
               <RichText  handleRichTextChange={this.handleRichTextChange}/>
                 {errors.body && <span className='errors'>{errors.body}</span>}
               </div>    
              <div  className='createblog col-sm-12 col-md-4'>
              <h3>New Blog</h3>
                    <div className={classnames("form-group", {'has-errors': errors.title})}>
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-12">
                        <input type="text" onChange={this.handleChange} value={this.state.title} className="form-control" id="title" placeholder='blog title' />
                        {errors.title && <span className='errors'>{errors.title}</span>}
                        </div>
                    </div>
                    <div className={classnames("form-group", {'has-errors': errors.cover_photo})}>
                        <label htmlFor="cover_photo" className="col-sm-5 col-form-label">Cover Photo</label>
                        <div className="col-sm-12">
                        <input  onChange={this.handleChange} type="text" value={this.state.cover_photo} className="form-control" id="cover_photo"  placeholder='enter the url of the image'/>
                        <ImageViewer  value = {this.state.cover_photo} style='blog-image'  onChange={this.handleChange} />
                        {errors.cover_photo && <span className='errors'>{errors.cover_photo}</span>}
                        </div>
                    </div>
                    <div className={classnames("form-group", {'has-errors': errors.category})}>
                        <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-12">
                        <select  onChange={this.handleChange} value={this.state.category} className="custom-select" id="category">
                                <option defaultValue >Choose...</option>
                                {categories}
                               
                        </select>
                       {addCategory}
                        {errors.category && <span className='errors'>{errors.category}</span>}
                        </div>
                    </div>
                    {/* <div className={classnames("form-group", {'has-errors': errors.body})}>
                        <label htmlFor="body" className="col-sm-2 col-form-label">Body</label>
                        <div className="col-sm-12">
                           
                         <textarea  onChange={this.handleChange} value={this.state.body} id='body' placeholder='type here...' className="form-control"  rows='20'></textarea>
                         {errors.body && <span className='errors'>{errors.body}</span>}
                        </div>
                       
                    </div> */}
                    <div className="form-group ">
                        <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Post</button>
                        <a type='button' href='/dashboard'  className="btn btn-danger">Cancel</a>
                
                        </div>
                    </div>
             
               </div>

              </form>

        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.authors.currentUser,
    user: state.authors.user,
    categories : state.blogs.allCategories
})

const mapActionsToProps = {
    createBlog,
    addFlashMessage,
    fetchAllCategories
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(CreateBlog))
