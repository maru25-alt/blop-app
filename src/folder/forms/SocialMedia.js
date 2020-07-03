import React, { Component } from 'react'

export class SocialMedia extends Component {
   state = {
       social: '',
       value : ''
   }

   handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
   }

    handleDelete = () =>{
      this.props.onDelete()
      this.setState({
          social: '',
          value: ''
      })

    }
    render() {
        return (
        <div>
            <div className=' input-group'>
                <div className="input-group-prepend">
                    <select id='social' onChange={this.handleChange}>
                        <option value='Facebook'>Facebook</option>
                        <option value='Instagram'>Instagram</option>
                        <option value='Twitter'>Twitter</option>
                        <option value='LinkedIn'>Linkedln</option>
                    </select>
                </div> 
                <input id='value' type="text" onChange={this.handleChange} value={this.state.value}  className="form-control"></input>
                <a onClick={this.handleDelete}><i className="fas fa-minus"></i></a>
            </div>
        </div>
        )
    }
}

export default SocialMedia
