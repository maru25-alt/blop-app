import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import SimpleReactValidator from 'simple-react-validator';
export default class Contact extends Component {
    constructor() {
        super();
        this.validator = new SimpleReactValidator({
            element: (message) => <div className="error">{message}</div>
        });
      }
    state = {
        name: "",
        email: "",
        message: "",
        number: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
     handleSubmit = (e) => {
         e.preventDefault();
     if (this.validator.allValid()) {
            emailjs.sendForm('gmail', 'contact', e.target, 'user_MKMbkoKCK0PNJYbeaCWRm')
            .then((result) => {
                console.log(result.text);
                alert("Successfully send message")
            }, (error) => {
                console.log(error.text);
                alert(error.text)
            });
            this.setState({
                name: "",
                email: "",
                message: "",
                number: ""
           })
       }
    else {
        this.validator.showMessages();
        this.forceUpdate();
      }
}



    render() {
        return (
            <div className='contact '>
            <h2>Computer-aided Learning </h2> 
            <span className='about-contact__subheading'>Place to learning computer science</span>
            <div className="col-6">
                    <div>
                        <h6>Computer-aided Learning Mission:</h6>
                        <p>Provide free computer science based tutorial and tips to developers around the world.
                         Together we can build a community in which we all benefit from</p>
                    </div>
                    <div>
                        <h6>Computer-aided Learning Vision:</h6>
                        <p>We want to connect over 100000 developers from all over the world to be part ofComputer-aided Learning. </p>
                    </div>
            </div>
            <div className='row'>
                <div className='contact-details col-sm-12 col-md-6'>
                    


                    <div>
                        <div className='contact-details__contacts'>
                        <h3>Contact Me: </h3>
                            <span><i className="fas fa-phone-alt "></i> &nbsp; +86 156 0542 6035</span> <br/>
                            <span><i className="fas fa-envelope "></i>  &nbsp; &nbsp;rudomaru25@gmail.com</span><br/>
                            <span><i className="fas fa-map-marker-alt "></i> &nbsp; &nbsp; 243 Tomazoes Road</span>
                        </div>
                        
                        <div className='contact-details__social'>
                        <h3>Follow Me:</h3>
                            <ul className='social-links'>
                            <li><a href="https://www.instagram.com/rudomaru25/"> <i className="fab fa-instagram fa-2x"></i></a></li>
                            <li><a href="https://www.facebook.com/rudo.mapfumba"><i className="fab fa-facebook fa-2x"></i></a></li>
                            <li><a href= "https://twitter.com/MapfumbaRudo"><i className="fab fa-twitter fa-2x"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/rudo-maru-6023a9167/"><i className="fab fa-linkedin fa-2x"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='contact-form col-sm-12 col-md-6'>
                    <h2>GET IN TOUCH </h2>
                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control"  type='text' name="user_name" value={this.state.name}  id="name" onChange={this.handleChange} />
                            {this.validator.message('name',this.state.name, 'required')}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type='email'  name="user_email" value={this.state.email}  id="email" onChange={this.handleChange}/>
                            {this.validator.message('email',this.state.email, 'required|email')}
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" name="message" value={this.state.message}  id="message" onChange={this.handleChange} ></textarea>
                            {this.validator.message('message',this.state.message, 'required')}
                        </div>
                        
                       <div className="form-group">
                           <button type='submit' className='button'>Send</button>
                       </div>

                    </form>
                </div>
            </div>
          </div>  
        )
    }
}
