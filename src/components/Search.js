import React, { Component } from 'react'

export default class Search extends Component {
    state ={
      search : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            search: ""
        })
        
    }
    render() {
        return (
            <div>  
               <form onSubmit={this.handleSubmit} className='col-md-10 col-sm-6'>
                   <h3>Search</h3>
                   <div className="input-group mb-3">
                   <input onChange={this.handleChange} value={this.state.search} id='search' type='text' className="form-control" placeholder='search...'aria-label="Recipient's username" aria-describedby="button-addon2"/>
                   <div className="input-group-append">
                   <button type='submit' className='btn btn-success' id="button-addon2">Enter</button>
                   </div>
                   </div>
               </form> 
            </div>
        )
    }
}
