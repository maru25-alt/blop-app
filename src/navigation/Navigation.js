import React, { Component } from 'react'
//import logo from '../images/logo.jpg'
import logo from '../images/logo.jpg'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchCategory} from '../store/actions/BlogsAction'

 class Navigation extends Component {

   logout = (e) => {
    e.preventDefault()
    this.props.authorSignout();
    this.props.history.push('/signin')
    
}
componentWillMount(){
  this.props.fetchCategory()
}
  
    render() {
      let categories = this.props.category && this.props.category.map(e => {
        return(
            <a key={e.id}className="badge badge-pill " href={`/category/${e.name}`}>{e.name}</a>
        )
      })
        return (
          <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className='navbar-brand'>
                                  <ul className='social-links'>
                                          <li><a href="https://www.instagram.com/rudomaru25/"> <i className="fab fa-instagram "></i></a></li>
                                          <li><a href="https://www.facebook.com/rudo.mapfumba"><i className="fab fa-facebook "></i></a></li>
                                          <li><a href= "https://twitter.com/MapfumbaRudo"><i className="fab fa-twitter "></i></a></li>
                                          <li><a href="https://www.linkedin.com/in/rudo-maru-6023a9167/"><i className="fab fa-linkedin "></i></a></li>
                                  </ul>
                          </div>
                    </nav>
            <header className='subheading'>
              <div className="app-logo">
                <img src={logo} alt='40x40'/>
              </div>
                <div className='app-categories'>
                 <a className="badge badge-pill active"  href='/'>Home</a>   
                 {categories}
                  <a className="badge badge-pill active"  href="/contact">About</a> 
                </div>
            </header>
  </div>

        )
    }
}

const mapActionsToProps = {
   fetchCategory,
 
}

const mapStateToProps = (state) => ({
     category: state.blogs.category
})

export default connect(mapStateToProps,mapActionsToProps)(withRouter(Navigation))