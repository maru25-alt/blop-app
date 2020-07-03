
import {FETCH_BLOGS, 
    FETCH_BLOG,
    FETCH_CATEGORY, 
    FETCH_COMMENTS, 
    FETCH_FEATURES,
    FETCH_RECENT_BLOGS,
    FETCH_AUTHOR, DELETE_BLOG, 
    ADD_FLASH_MESSAGE, EDIT_BLOG,
    FETCH_CATEGORY_BLOGS,
    FETCH_ALL_CATEGORIES
   } 
    from './types';
import axios from 'axios'    


export const fetchBlogs = () => dispatch =>{
   console.log('fetching blogs')
    axios
    .get('http://localhost:5000/blogs')
    .then(res => {
       console.log(res.data, 'server call');
       dispatch({
                type: FETCH_BLOGS,
                payload: res.data
            }) 
    }).catch(err =>{
       console.log(err)
    })
};

export const fetchBlog = (id) => dispatch =>{
    console.log('fetching blog')
    axios.get(`http://localhost:5000/blogs/getblog/${id}`)
    .then(res => {
        console.log(res.data,'featured')
        dispatch({
            type: FETCH_BLOG,
            payload: res.data
        });    
    })
   
};

export const fetchCategory = () => dispatch =>{
    console.log('fetching category')
    axios.get('http://localhost:5000/categories')
    .then(res => {
        console.log(res.data,'featured')
        dispatch({
            type: FETCH_CATEGORY,
            payload: res.data
        });    
    })
    
};

export const fetchComments = (id) => dispatch =>{
    console.log('fetching comments');
    axios.get(`http://localhost:5000/comments/${id}`)
    .then(res => {
        console.log(res.data)
        dispatch({
            type: FETCH_COMMENTS,
            payload: res.data
        }); 
    })   
};

export const fetchRecentBlogs = () => dispatch =>{
    console.log('fetching recent blogs')
    axios.get('http://localhost:5000/blogs/getRecent')
    .then(res => {
        console.log(res.data,'featured')
        dispatch({
            type: FETCH_RECENT_BLOGS,
            payload: res.data
        });    
    })


};

export const fetchAuthor = (id) => dispatch =>{
    console.log('fetching author');
    axios.get(`http://localhost:5000/blogs/getAuthor/${id}`)
    .then(res => {
        dispatch({
            type: FETCH_AUTHOR,
            payload: res.data
        }); 
    })   
};


export const fetchFeatured = () => dispatch =>{

    console.log('fetching featured blogs')
    axios.get('http://localhost:5000/blogs/getfeatured')
    .then(res => {
        console.log(res.data,'featured')
        dispatch({
            type: FETCH_FEATURES,
            payload: res.data
        });    
    })
   
};

export const fetchCategoryBlogs = (id) => dispatch => {
    axios.get(`http://localhost:5000/categories/getblogs/${id}`)
    .then(res => {
        dispatch({
            type: FETCH_CATEGORY_BLOGS,
            payload: res.data
        })
    })
}



export const createBlog = (blog) => dispatch => {
  return  axios.post('http://localhost:5000/blogs/newblog', blog)
    

}



export const deleteBlog = (id) => dispatch => {
    axios.delete(`http://localhost:5000/blogs/delete/${id}`).then(res => {
        console.log(res.data)
        dispatch({
            type: DELETE_BLOG,
            payload: id
        });
        let successMessage = {
            type: 'success',
            text: res.data
        }
        let errorMessage = {
            type: 'error',
            text: 'Sorry error occurred'
        }
        if(res.data.includes('Post deleted...')){
            dispatch({
                type: ADD_FLASH_MESSAGE,
                payload: successMessage
            })}
        else{
            dispatch({
                type: ADD_FLASH_MESSAGE,
                payload: errorMessage
            })
        }
        
    })
}


export const editBlog = (id, name , value) => dispatch => {
    console.log(id, name , value)
    dispatch({
      type: EDIT_BLOG,
      id,
      name,
      value
    })

}

export const postEditBlog = (id,post) => dispatch => {
    console.log(post)
  return axios.post(`http://localhost:5000/blogs/update/${id}`, post)

}

export const fetchAllCategories = () => dispatch => {
    axios.get('http://localhost:5000/categories/getAllcategories').then(res => {
        dispatch({
            type: FETCH_ALL_CATEGORIES,
            payload: res.data
         })
    })
    
}

export const addCategory = (body) =>  dispatch =>{
    return axios.post('http://localhost:5000/categories/addCategory', body)
}