import Api from './Api'

export default {
    register(info){
        return Api().post('register', info)
    }
}
