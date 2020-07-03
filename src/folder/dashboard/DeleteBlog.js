import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteBlog} from '../../store/actions/BlogsAction'

export class DeleteBlog extends Component {
    onDelete = () => {
        console.log('deleted')
        this.props.deleteBlog(this.props.id)
    }
    render() {
        return (
            <div>
                 <button type="button" className="btn m-3 btn-danger" data-toggle="modal" data-target="#staticBackdrop">Delete</button>
            
                 <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                   
                    <div className="modal-body">
                       Are you sure you want to delete this post
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button onClick={this.onDelete} type="button" className="btn  btn-primary" data-dismiss="modal">Delete</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {deleteBlog})(DeleteBlog)
