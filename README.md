# Tab Project
A project that tracks your guitar tabs. This project is a tutorial i am following from the youtubue channel freeCodeCamp.org. You can see the course i was following by clicking [here](https://www.youtube.com/watch?v=Fa4cRMaTDUI&t=183s). In this README file you can find what i have learned from this tutorial as well when i had learned this. This documantation mainly consist of a journal of what i have learned.

## Table of contents
*   [Journal](#journal)
    *   [27 May Monday 2019](#27-may-monday-2019)
        *   [Full Stack Web App using Vue and Express Part 1 Intro](#full-stack-web-app-using-vue-and-express-part-1-intro)
## Journal
### 27 May Monday 2019
#### Full Stack Web App using Vue and Express Part 1 Intro
**What have i learned?**
*   New way of making object methods/functions
    ```js
    export default {
        register(info){
            return Api().post('register', info)
        }
    }
    ```
    is the same as
    ```js
    export default {
        register: function(info){
            return Api().post('register', info)
        }
    }
    ```
*   axios methods
    *   Creating a new axios instance (Promise based HTTP client/the requests) by `axios.create`. This methods needs at least an baseURL value as a object.
    ```js
    export default () =>{
        return axios.create({
            baseURL: `http://localhost:8081`
        })
    }
    ```
    *   Trigger Axios post
        *   First parameter in the post function is the path of the post
        *   Second parameter is the data that is passed on to the post method 
    ```js
    // API is a method improted from the code above
    Api().post('register', info)
    ```
*   Importing Methods
    You can import a whole file and use the filename as a reference to that exported file 
    ```js
    // File from Api.js
    export default () =>{
        return axios.create({
            baseURL: `http://localhost:8081`
        })
    }
    ```
    ```js
    // File from Auth.js
    import Api from './Api'
    export default {
        register(info){
            return Api().post('register', info)
        }
    }
    ```
### 28 May Tuesday 2019
#### Full Stack Web App using Vue.js & Express.js Part 2 Sequelize