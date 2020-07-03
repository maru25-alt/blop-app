import React, { Component } from 'react'

export default class Contact extends Component {
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
                                  <li><a><i className="fab fa-instagram fa-2x"></i></a></li>
                                  <li><a><i className="fab fa-facebook fa-2x"></i></a></li>
                                  <li><a><i className="fab fa-twitter fa-2x"></i></a></li>
                                  <li><a><i className="fab fa-linkedin fa-2x"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='contact-form col-sm-12 col-md-6'>
                    <h2>Message Us</h2>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" required type='text'/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" required type='email'/>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea required className="form-control">

                            </textarea>
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
