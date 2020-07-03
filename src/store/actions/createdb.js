import axios from 'axios'  
import {
    ADD_FLASH_MESSAGE,
    CREATE_DATABASE,
    CREATE_TABLES,
    INSERT_INTO_TABLES
   } 
    from './types';


    export const createDatabase = () => dispatch => {
        axios.get(`http://localhost:5000/createdb`).then( res => {
            if(res.data.includes('database successfully created')){
                console.log("database created")
                axios.get(`http://localhost:5000/createdb/createtables`).then( res => {
                    console.log(res.data)
                    let text = {
                        type: 'success',
                        text: 'database successfully created' 
                    }
                    dispatch({
                        type: ADD_FLASH_MESSAGE,
                        payload: text
                    })
                })
            }
            else{
                let text = {
                    type: "error",
                    text: "fail to create database"
                }
                dispatch({
                    type: ADD_FLASH_MESSAGE,
                    payload: text
                })
            }
        })
    }