import React , {useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {addFlashMessage} from '../store/actions/FlashMessages'

const PrivateRoute = ({ component: ComposedComponent, isAuthentification, addFlashMessage, ...rest }) => {
  
     useEffect(() =>{
       if(!isAuthentification){
          addFlashMessage({type:'error', text:'you must be logged in to access dashboard page'})
       }
        
     })
       return(
        <Route {...rest} render={props => (
          isAuthentification ? <ComposedComponent {...props} />
          : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
      )} />

       ) 
     }





const mapStateToProps = (state) => ({
  isAuthentification: state.authors.isAuthenticated
})

export default connect(mapStateToProps, {addFlashMessage})(PrivateRoute)