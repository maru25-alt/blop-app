import {} from './types'
import axios from 'axios'

export const addUser = (user) => dispatch =>{
  return  axios.post('http://localhost:5000/users/new', user)
}



export const addComment = (comment) => dispatch => {
 
    return axios.post('http://localhost:5000/comments/addcomment', comment)
}