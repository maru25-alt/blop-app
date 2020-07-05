import Client from '../api'
import {FETCH_BLOGS, 
    FETCH_BLOG,
    FETCH_CATEGORY, 
    FETCH_FEATURES,
    FETCH_RECENT_BLOGS,
    FETCH_AUTHOR, 
    FETCH_CATEGORY_BLOGS,
    GET_PAGINATION
   } 
    from './types';
  
 export const fetchBlogsNum = () => dispatch => {
    Client.getEntries({
        content_type : "posts",
       
    }).then((res) => {
        const blogNum = res.items.length
        dispatch({
            type: GET_PAGINATION,
            payload: blogNum
        }) 
    })
 }   


export const fetchBlogs = () => dispatch =>{
   console.log('fetching blogs...')
    Client.getEntries({
        content_type : "posts",
        "skip": 0,
        "limit": 6, 
    }).then((res) => {
        dispatch({
            type: FETCH_BLOGS,
            payload: res.items
        }) 
    })
};

export const fetchBlog = (id) => dispatch =>{
    console.log('fetching blog...')
    Client.getEntries({
        content_type : "posts"
    }).then((res) => {
        let post = res.items.filter(e => {
          return  e.sys.id === id;
        })
        dispatch({
            type: FETCH_BLOG,
            payload: post
        }) 
    })
   
};

export const fetchCategory = () => dispatch =>{
    console.log('fetching categories...')
    Client.getEntries({
        content_type : "posts",
        
    }).then((res) => {
    const getUnique = (items, value) => {
            return [...new Set(items.map((item, index) => {
                return   {
                     id:index, 
                     name:item.fields[value],
                     number: items.filter(str => str.fields.category === item.fields[value]).length
                    }
               })
            )]
        }
    let categories = getUnique(res.items, "category")
    dispatch({
            type: FETCH_CATEGORY,
            payload: categories
        }) 
    })
    
};


export const fetchRecentBlogs = () => dispatch =>{
    console.log('fetching recent blogs...')
    Client.getEntries({
        content_type : "posts",
        order: 'sys.createdAt'
    }).then((res) => {
        let recentPost = res.items.slice(0, 3) 
        dispatch({
            type: FETCH_RECENT_BLOGS,
            payload: recentPost
        }) 
    })


};

export const fetchAuthor = () => dispatch =>{
    console.log('fetching author...');
    Client.getEntries({
        content_type : "author",
    }).then((res) => {
        dispatch({
            type: FETCH_AUTHOR,
            payload: res.items
        }) 
    })  
};

export const fetchFeatured = () => dispatch =>{

    console.log('fetching featured blogs...')
    Client.getEntries({
        content_type : "posts",
        order: 'sys.createdAt'
    }).then((res) => {
        let recentPost = res.items.slice(0, 3) 
        dispatch({
            type: FETCH_FEATURES,
            payload: recentPost
        }) 
    })
   
};

export const fetchCategoryBlogs = (id) => dispatch => {
   console.log(id)

    Client.getEntries({
        content_type : "posts",
    }).then((res) => {
        let posts = res.items.filter(post => {
          return  post.fields.category === id
        })
        dispatch({
            type: FETCH_CATEGORY_BLOGS,
            payload: posts
        }) 
    })
}





