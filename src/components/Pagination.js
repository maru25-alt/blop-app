import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
      console.log(this.props)
      let pages = this.props.blogs_num / 5;
    
        return (
            <div  className='pagination_container'>
                <nav aria-label="Page ">
                    <ul className="pagination">
                      
                      <li className="page-item">
                        <a className="page-link"  aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className=""><a className="page-link" >1</a></li>
                      <li className="page-item"><a className="page-link" >2</a></li>
                      <li className="page-item"><a className="page-link" >3</a></li>
                      <li className="page-item">
                        <a className="page-link" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
