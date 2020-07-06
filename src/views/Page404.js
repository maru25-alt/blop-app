import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Page404 extends Component {

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.history.goBack()
        
    }
    render() {
        return (
            <div className='container_404 jumbotron'>
                <h1>404 </h1>
                <p>Opps Sorry , Page you are looking for is not found</p>
                <button onClick={this.handleSubmit} className='btn btn-secondary'>Go back</button>
            </div>
        )
    }
}

export default withRouter(Page404)