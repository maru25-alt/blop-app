import React, { Component } from 'react'
import {connect} from 'react-redux'
import { PropTypes } from 'prop-types';

class AboutAuthor extends Component {
    render() {
       let author = this.props.aboutAuthor
        return (
            <>
            {author && author.map(data => {
                return(
                    <div key={data.sys.id} className='author'>
                        <div  className='heading'> <span>About Author</span></div>
                            <div className='author-content'>
                            <div>  <img className='author-image' src={data.fields.profile.fields.file.url} alt="400X400"  height='150' width='100'  /> </div>
                            <div>
                                <h6>{data.fullName}</h6>
                                <p>{data.fields.description}</p>
                                <p> <span><i className="fas fa-envelope "></i>  &nbsp; &nbsp;{data.fields.email}</span><br/></p>
                                <ul className='social-links'>
                                    {data.fields.socialMedia.map((e, i) => {
                                        return(
                                        <li key={i}><a href={`${e.link}`}> <i className={`fab fa-${e.title}`}></i> {e.name}</a></li>
                                        )
                                    })}
                                   
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
AboutAuthor.propTypes = {
    aboutAuthor: PropTypes.array.isRequired
  };

const mapStateToProps = (state) => ({
    aboutAuthor: state.blogs.author,  
})

export default  connect(mapStateToProps)(AboutAuthor)