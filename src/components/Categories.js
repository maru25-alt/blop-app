import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Categories extends Component {
    render() {
        return (
            <div>
                <h3>Categories</h3> 
                {this.props.categories.map( category => {
                    return (
                        <div key={category.id}>
                            <p> {category.name} <span>({category.number})</span></p>
                        </div>
                    )}
                )}
            </div>
        )
    }
}

Categories.propTypes ={
    categories : PropTypes.array.isRequired
   
   };