import React, { Component } from 'react'

 class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
        this.props.onChange(event)
      }
      render() {
        return (
          <div>
            {/* <input type="file" id="profile_picture" onChange={this.handleChange}/> <br></br> */}
            <img className={this.props.style} src={this.props.value}/>
          </div>
        );
      }
}

export default Profile
