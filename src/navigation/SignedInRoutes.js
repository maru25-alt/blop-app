import React from 'react'


const SignedInRoutes = (props) => {
  return (
    <>
       <div className=" dropdown ">
                            <a className="nav-link-item dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user  fa-2x"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/dashboard">Dashboard</a>
                                <a className="dropdown-item" href="/createblog">Create new blog</a>
                                <a className="dropdown-item" href="/editprofile">Edit Profile</a>
                                <a className="dropdown-item" onClick= {props.logout} type='button'>Log Out</a>   
                            </div>
       </div>    
    </>
  )
}

const SignedOutRoutes = () => {
    return (
        <div className="navbar-buttons" >
          <a className="nav-link-item a" href="/signup">Sign Up</a>
          <a className="nav-link-item " href="/signin">Sign In</a> 
        </div>
    )
  }

export { 
    SignedInRoutes,
    SignedOutRoutes
}
