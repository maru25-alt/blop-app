import {FETCH_BLOGS,  FETCH_BLOG , FETCH_CATEGORY,FETCH_COMMENTS, FETCH_FEATURES,FETCH_RECENT_BLOGS, FETCH_AUTHOR, DELETE_BLOG,FETCH_CATEGORY_BLOGS,FETCH_ALL_CATEGORIES}from '../actions/types';
const intialState = {
    blogs: [],
    blog: [],
    category: [],
    comments: [],
    featured: [],
    recentBlogs: [],
    author : [],
    editBlog: [],
    categoryBlogs: [],
    allCategories: []
}
export default function (state = intialState, action){
    switch(action.type){
        case FETCH_BLOGS :
            return {
                ...state,
                blogs: action.payload
            };
        case  FETCH_BLOG :
            return {
                ...state,
                blog: action.payload
            };

        case FETCH_CATEGORY :
            return {
                    ...state,
                    category: action.payload
                };
        case FETCH_COMMENTS :
            return {
                 ...state,
                comments: action.payload
                 }; 
             
        case FETCH_FEATURES :
            return {
                 ...state,
                featured: action.payload
                     }; 
        case FETCH_RECENT_BLOGS :
            return {
                 ...state,
                 recentBlogs: action.payload
            };     
        case FETCH_AUTHOR :
                return {
                     ...state,
                     author: action.payload
                }; 
        case DELETE_BLOG: 
            return{
                ...state,
                blogs: state.blogs.filter(e => e.id !== action.payload)
            }

        case FETCH_CATEGORY_BLOGS:
            return{
                ...state,
                categoryBlogs: action.payload
            }    
        case FETCH_ALL_CATEGORIES: 
           return{
               ...state,
               allCategories: action.payload
           }
        default: return state;
    }
}

