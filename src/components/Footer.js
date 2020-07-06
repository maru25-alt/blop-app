import React, { Component } from 'react'
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
            alert(`Thanks for subscribing ${this.state.email}. You are going to be receiving emails notifying you about new post. Feel free to unsubscribe any time`)
            this.setState({
                errors: '', 
                email:''
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
                      <li><a href="https://www.instagram.com/rudomaru25/"> <i className="fab fa-instagram fa-2x"></i></a></li>
                      <li><a href="https://www.facebook.com/rudo.mapfumba"><i className="fab fa-facebook fa-2x"></i></a></li>
                      <li><a href= "https://twitter.com/MapfumbaRudo"><i className="fab fa-twitter fa-2x"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/rudo-maru-6023a9167/"><i className="fab fa-linkedin fa-2x"></i></a></li>
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
                      <p>&copy;All copyrights reserved, rudomaru25, {this.getYear()}</p>
                </div>
            </div>
        )
    }
}



export default (Footer)