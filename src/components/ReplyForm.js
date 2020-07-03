import React, { Component } from 'react'

export default class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          comment: ''
        };
      }

      handleChange = (e) => {
         this.setState({
             [e.target.id]: e.target.value
         })
      }

      handleSubmit = (e) => {
          e.preventDefault();
          console.log(this.state)
      } 
    render() {
        return (
            <div className = 'comment-form'>
                <div><span>Leave a Reply: </span></div>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="form-control" id='email'  onChange={this.handleChange} value={this.state.email} type='email' placeholder='Your Email address'/>
                        </div>
                    <div className="form-group">
                     <textarea className="form-control" id='comment'  onChange={this.handleChange} rows='5' value={this.state.comment}></textarea >
                    </div>
                    <div className="form-group">
                     <button  type='submit' className='button'>Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
