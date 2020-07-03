import {SIGNIN, SIGNOUT, GET_CURRENT_USER, 
    EDIT_PROFILE, GET_AUTHOR_BLOGS, DELETE_BLOG, EDIT_BLOG
} from '../actions/types'
import isEmpty from 'lodash/isEmpty';
const intialState = {
    isAuthenticated: false,
    user: {},
    currentUser: {},
    blogs: [],  
}
export default function (state = intialState, action){
    switch (action.type) {
        case SIGNIN:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload }
        case SIGNOUT :
            return{
                ...state,
                isAuthenticated: false,
                user: {} } 
         case GET_CURRENT_USER: 
              return{
                  ...state,
                  currentUser: action.payload }     
         case EDIT_PROFILE:
              return{
                  ...state,
                  currentUser: [ {...state.currentUser[0],
                    [action.id]: action.value}]  }    
         case GET_AUTHOR_BLOGS: 
         return{
             ...state,
             blogs: action.payload
         }  
         case DELETE_BLOG: {
             return{
                 ...state,
                 blogs: state.blogs.filter(e => e.id !== action.payload)
             }
         }
         case EDIT_BLOG: 
        let editBlog  = state.blogs.filter(e => {
            return  e.post_id === action.id 
        } ); 
       let EditedBlog = {...editBlog[0], [action.name]: action.value}
            return{
                ...state, 
                blogs: [...state.blogs.filter(e => e.post_id !== action.id), EditedBlog]
            }           
        default:
            return state
    }
}