import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addUser} from '../store/actions/User'
import {addFlashMessage} from '../store/actions/FlashMessages'

class Footer extends Component {

    state = {
        email: '',
        errors: '',
    }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.email === ''){
            this.setState({
                errors: 'Email is required'
            })
        }
        else{
            this.setState({
                errors: '',
              
            })
            this.props.addUser({email: this.state.email}).then( res => {
                console.log(res)

                if(res.data.includes('user successfully created')){
                    this.setState({
                        email : ''
                    })
                    this.props.addFlashMessage({type: 'success', text: 'Created Successfully, Thanks for Subscribing! '})
                }
                else if(res.data.includes('Email already exist ')){
                    this.props.addFlashMessage({type: 'error', text: 'This email already exist in our Subscribers list '})
                
               }

               else {
                this.props.addFlashMessage({type: 'error', text: 'Sorry Something went wrong'})
               }
            })
        }
        
    }

    getYear = () =>{
      return  new Date().getFullYear(); 
    }

    render() {
        return (
            <div className='footer'>
                <div className='logo'>
                 <h2>Computer-aided Learning</h2>
                </div>
                <div className='footer-social-icons'>
                  <ul className='social-links'>
                      <li><a> <i className="fab fa-instagram fa-2x"></i></a></li>
                      <li><a><i className="fab fa-facebook fa-2x"></i></a></li>
                      <li><a><i className="fab fa-twitter fa-2x"></i></a></li>
                      <li><a><i className="fab fa-linkedin fa-2x"></i></a></li>
                  </ul>
                </div>
                <div  className='footer-subscribe'>
                    <form onSubmit={this.handleSubmit}>
                      <div className="input-group mb-4">
                        <input type='email' placeholder='Enter your email' onChange={this.handleChange} value={this.state.email} id='email'/>
                       <div  className="input-group-append">
                         <button type='submit' className='btn btn-success' >Subscribe</button>
                       </div>
                       </div>
                       {this.state.errors && <span className='errors'>{this.state.errors}</span>}
                    </form>
                </div>
                <div className='footer-text'>
                      <p> &copy; All copyrights rudomaru25, {this.getYear()}</p>
                </div>
            </div>
        )
    }
}

const mapActionsToProps = {
    addUser,
    addFlashMessage
}

export default connect(null, mapActionsToProps)(Footer)