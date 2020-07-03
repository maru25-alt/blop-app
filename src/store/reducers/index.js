import {combineReducers} from 'redux'

import blogReducer from './blogReducer';
import authorReducer from './authorReducer';
import flashMessagesReducer from './FlashMessegesReducer'


export default combineReducers({
    blogs: blogReducer,
    authors: authorReducer,
    flashMessages: flashMessagesReducer
})