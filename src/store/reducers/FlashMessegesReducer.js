 import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from '../actions/types'
 import shortid from 'shortid';


 const intialState = {
    flashMessages: []

};

export default function (state = intialState, action){
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            const newFlash = {
                id: shortid.generate(),
                type: action.payload.type,
                text: action.payload.text
            }
            return{
                ...state,
                flashMessages: [...state.flashMessages, newFlash]

            }
        case DELETE_FLASH_MESSAGE:
            return {
                ...state,
                flashMessages: state.flashMessages.filter( e => {
                   return e.id !== action.id
                }) 
            }
        default:
            return state
    }
}