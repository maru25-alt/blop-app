import { SIGNIN,  SIGNOUT, GET_CURRENT_USER, EDIT_PROFILE, GET_AUTHOR_BLOGS} 
    from './types';
import axios from 'axios'    
import setAuthorizationToken from './authorization'
import jwt from 'jsonwebtoken'


export const authorSignup = (user) => dispatch => {
    return axios.post('http://localhost:5000/author/signup', user)  
   
}

export const authorSignin = (user) => dispatch => {
    return axios.post('http://localhost:5000/author/signin', user)
      
}

export const setCurrentUser = (user) =>{
    console.log('running')
    return{
        type: SIGNIN,
        payload: user
    }
}

export const  loginInUser = (token) => dispatch => {
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
     let user = (jwt.decode(token))
    dispatch({
        type: SIGNIN,
        payload: user
    })

}

export  const authorSignout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch({
        type: SIGNOUT,     
    })
   
}


export const getAuthor = (id) => dispatch => {
    axios.get(`http://localhost:5000/author/getAuthor/${id}`).then((user) => {
         dispatch({
             type: GET_CURRENT_USER,
             payload: user.data

         })
    })

}
export const getAuthorBlogs = (id) => dispatch => {
    axios.get(`http://localhost:5000/author/getAllBlogs/${id}`).then( res => {
        dispatch({
            type: GET_AUTHOR_BLOGS,
            payload: res.data
        })
    })
}

export const editProfile = (id, value) => dispatch => {
    dispatch({
        type: EDIT_PROFILE,
        value: value,
        id: id
    })

}

export const changeProfile = (user) => dispatch => {
   let id  = user.author_id
   let updates = {
    email: user.email,
    full_name: user.full_name,
    description: user.description,
    social_media: user.social_media,
    profile_picture: user.profile_picture
   }
  return   axios.post(`http://localhost:5000/author/updateProfile/${id}`, updates)
}

