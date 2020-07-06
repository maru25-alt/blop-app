import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchBlogsNum} from '../store/actions/BlogsAction'
import PropTypes from 'prop-types'
 class Pagination extends Component {
   componentWillMount(){
     this.props.fetchBlogsNum();
   }
    render() {
      let itemPerPage = 6 
      let pages =  Math.ceil(this.props.pagination / itemPerPage);
      if(pages <= 1){
        return(
          <></>
        )
      }
      else if(pages === 2){
        return(
          <ul className="pagination">
            <li className="page-item">
                <a href="/" className="page-link"  aria-label="Previous"><span aria-hidden="true">&laquo;</span>Previous</a>
            </li>   
            <li className="page-item">
                <a href="/" className="page-link" aria-label="Next"><span aria-hidden="true">&raquo;</span>Next</a>
            </li>

        </ul>
        )
      }
      else{
        return(
          <div  className='mx-5'>
          <nav aria-label="Page ">
              <ul className="pagination">
                
                <li className="page-item">
                  <a href="/" className="page-link"  aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {
                  Array.apply(null, {pages }).map((e, i) => (
                  <li key={i}  className=""><a href="/" className="page-link" >{i}</a></li>
                  ))
                }
                <li className="page-item">
                  <a href="/" className= "page-link" aria-label="Next"> <span aria-hidden="true">&raquo;</span></a>
                 
                </li>
              </ul>
          </nav>
      </div>
        )
      }
       
    }
}

Pagination.propTypes ={
  fetchBlogsNum : PropTypes.func.isRequired,
  pagination: PropTypes.number.isRequired
 };

const mapStateToProps = (state) =>({
  pagination : state.blogs.pagination
})

export default connect(mapStateToProps, {fetchBlogsNum})(Pagination)