import React, { Component } from 'react'
import Blog from './Blog'

export class BlogList extends Component {
    render() {
        if(this.props.blogs.length === 0){
            return (
                <div className='empty-search'>
                    <p>You haven't posted yet</p>
                </div>
            )
        }
        return (
            <>
           
            {this.props.blogs && this.props.blogs.map(blog => {
               return (<Blog key={blog.post_id} blog={blog} />)
            })}
            </>
        )
    }
}

export default BlogList
