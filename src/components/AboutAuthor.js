import React, { Component } from 'react'
import {connect} from 'react-redux'
import user_profile from '../images/photo-profile.jpeg'

class AboutAuthor extends Component {
    render() {
       let author = this.props.aboutAuthor
     
        return (
  <>
            {author && author.map(data => {
                 let profile = data.profile_picture === 'NULL' ? user_profile : data.profile_picture
                return(
                    <div key={data.author_id} className='author'>
                        <div  className='heading'> <span>About Author</span></div>
                            <div className='author-content'>
                            <div>  <img className='author-image' src={profile} alt="400X400"  height='150' width='150' /> </div>
                            <div>
                                <h6>{data.full_name}</h6>
                                <p>{data.description}</p>
                                <p> <span><i className="fas fa-envelope "></i>  &nbsp; &nbsp;{data.email}</span><br/></p>
                                <ul className='social-links'>
                                    <li><a> <i className="fab fa-instagram"></i></a></li>
                                    <li><a><i className="fab fa-facebook"></i></a></li>
                                    <li><a><i className="fab fa-twitter"></i></a></li>
                                    <li><a><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
            </>
        )
    }
  
}

const mapStateToProps = (state) => ({
    aboutAuthor: state.blogs.author,  
})

export default  connect(mapStateToProps)(AboutAuthor)