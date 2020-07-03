import React, {Component} from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'


class FlashMessage extends Component {

    onClick = () => {
        this.props.deleteFlashMessage(this.props.message.id)
    }
    render() {
        const {type, text} = this.props.message
        return (
            <div>
                 <div role="alert" className={classnames('alert alert-dismissible fade show', 
                    {'alert-success': type === 'success',
                     'alert-danger': type === 'error'}, )}>
                     <strong className="text-center">{text} </strong>
                     <button onClick={this.onClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                    </button>
        </div>
            </div>
        )
    }
}

FlashMessage.propType = {
    message : PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage