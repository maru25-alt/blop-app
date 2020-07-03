import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        let categories = this.props.categories.map( category => {
            return (
                <div key={category.category_id}>
                    <p> {category.name} <span>({category.number})</span></p>
                </div>
            )
            })
        return (
            <div>
                <h3>Categories</h3> 
                <div>{categories}</div>
            </div>
        )
    }
}
