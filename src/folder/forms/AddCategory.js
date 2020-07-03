import React, { Component } from 'react'
import {v1} from 'uuid'
import {isEmpty} from 'lodash';
import {addCategory} from '../../store/actions/BlogsAction'
import {connect} from 'react-redux'

export class AddCategory extends Component {
    state = {
        name : '',
        errors: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })

    }
    validate = () => {
        let isError = false;
       let errors = '';

        if(isEmpty(this.state.name)){
            isError = true;
            errors = 'This field cannot be empty';
        };

        return {isError, errors}

    }
    handleDelete = () =>{
        console.log('deleted');
        this.props.onDelete();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {isError, errors} = this.validate()
        if(isError){
            this.setState({
                errors: errors
            })
        }
        else{
            let body = {
                name: this.state.name
            }
            this.props.addCategory(body)
            .then(res => {
                alert(res.data);
                this.setState({
                    name: '',
                });
            })
            
        }
        
    }

    render() {
        let errors = this.state.errors
        return (
            <div> 
                <div className="input-group mb-3">
                <a onClick={this.handleDelete}><i className="fas fa-minus"></i></a>
                 <input onChange={this.handleChange} type="text" className="form-control" id='name' value={this.state.name} placeholder="Enter the category name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.handleSubmit} type="button" id="button-addon2">Add</button>
                </div>
            </div>
            {errors && <span className='errors'>{errors}</span>}
            </div>
        )
    }
}

export default connect(null, {addCategory})(AddCategory)
