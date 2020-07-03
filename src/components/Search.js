import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>  
               <form className='col-md-10 col-sm-6'>
                   <h3>Search</h3>
                   <div className="input-group mb-3">
                   <input type='text' className="form-control" placeholder='search on the site...'aria-label="Recipient's username" aria-describedby="button-addon2"/>
                   <div className="input-group-append">
                   <button type='submit' className='btn btn-success' id="button-addon2">Enter</button>
                   </div>
                   </div>
               </form> 
            </div>
        )
    }
}
