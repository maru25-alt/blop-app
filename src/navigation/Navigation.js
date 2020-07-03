import React, { Component } from 'react'
import logo from '../images/logo.jpg'
import {SignedInRoutes, SignedOutRoutes} from './SignedInRoutes'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {authorSignout} from '../store/actions/AuthActions'
import { fetchCategory} from '../store/actions/BlogsAction'

 class Navigation extends Component {

   logout = (e) => {
    e.preventDefault()
    this.props.authorSignout();
    this.props.history.push('/signin')
    
}
componentWillMount(){
  this.props. fetchCategory()
  console.log('navigation mounted')
}
  
    render() {
      let isloggedIn;
      if(this.props.isAuthentification){
        isloggedIn = <SignedInRoutes  logout={this.logout}/>
      }
      else {
        isloggedIn = <SignedOutRoutes  />
      }
      console.log(this.props.category)
      let categories = this.props.category && this.props.category.map(e => {
        return(
            <a key={e.category_id}className="badge badge-pill badge-success" href={`/category/${e.category_id}`}>{e.name}</a>
        )
      })
        return (
          <div>
             
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className='navbar-brand'>
                                  <ul className='social-links'>
                                          <li><a> <i className="fab fa-instagram "></i></a></li>
                                          <li><a><i className="fab fa-facebook "></i></a></li>
                                          <li><a><i className="fab fa-twitter "></i></a></li>
                                          <li><a><i className="fab fa-linkedin "></i></a></li>
                                  </ul>
                          </div>
                      <div className="navbar-items  justify-content-end">
                            {isloggedIn} 
                      </div>
                    </nav>
            <header className='subheading'>
              <div className="app-logo">
                <img src={logo} alt='40x40'/>
              </div>
                <div className='app-categories'>
                 <a className="badge badge-pill badge-success"  href='/'>Home</a>
                    {categories}
                  <a className="badge badge-pill badge-success" href="/contact">About Us</a> 
                </div>
            </header>
  </div>

        )
    }
}

const mapActionsToProps = {
   fetchCategory,
  authorSignout
}

const mapStateToProps = (state) => ({
     isAuthentification: state.authors.isAuthenticated,
     category: state.blogs.category
})

export default connect(mapStateToProps,mapActionsToProps)(withRouter(Navigation))