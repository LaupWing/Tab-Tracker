import Api from '@services/Api'

export default {
    register(info){
        return Api().post('register', info)
    }
}
