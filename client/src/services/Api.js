// This file is used to make calls to our own api
import axios from 'axios'

export default () =>{
    return axios.create({
        baseURL: `http://localhost:8081`
    })
}