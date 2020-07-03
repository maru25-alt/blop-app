import React, { Component } from 'react'
import {createBlog} from '../store/actions/BlogsAction'
import {} from 'react-redux'


export class CreateBlog extends Component {
    state = {
        title: '',
        photo_url: '',
        category: '',
        body: '',
    }

    handleChange = (e) =>{
         this.setState({
             [e.target.id] : e.target.value
         })
    };
    

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className='createblog'>
                <h3>New Blog</h3>
                <form onSubmit={this.handleSubmit}> 
                    <div className="form-group ">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                        <input type="text" onChange={this.handleChange} value={this.state.title} className="form-control" id="title" placeholder='blog title' required/>
                        </div>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="photo_url" className="col-sm-5 col-form-label">Cover Photo</label>
                        <div className="col-sm-10">
                        <input  onChange={this.handleChange} type="text" value={this.state.photo_url} className="form-control" id="photo_url" required placeholder='enter the url of the image'/>
                        </div>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-10">
                        <select  onChange={this.handleChange} value={this.state.category} className="custom-select" id="category">
                                <option selected>Choose...</option>
                                <option value="Machine Learning">Machine Learning </option>
                                <option value="Web Development ">Web Development  </option>
                                <option value="App Development">App Development  </option>
                                <option value="Data Structures">Data Structures  </option>
                                <option value="Others">Others</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group ">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Body</label>
                        <div className="col-sm-10">
                            <textarea  onChange={this.handleChange} value={this.state.body} id='body' placeholder='type here...' className="form-control"  rows='10'></textarea>
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                    </div>
               </form>
            </div>
        )
    }
}

export default CreateBlog
