import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage'
import {deleteFlashMessage} from '../store/actions/FlashMessages'

export class FlashMessageList extends Component {

    render() {
        const messageArray = this.props.flashMessages
        const messages = messageArray && messageArray.map(message => (
            <FlashMessage key={message.id}  message={message}  deleteFlashMessage={this.props.deleteFlashMessage}/>
        ))
        return (
            <div className='flashMessages'>
                {messages}
            </div>
        )
    }
}

FlashMessageList.protoType = {
    messages: PropTypes.array.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
    flashMessages : state.flashMessages.flashMessages
})

export default connect(mapStateToProps,{deleteFlashMessage})(FlashMessageList);
