import API from './API'
export default {
    getVolcano() {
        return API().get()
    },
}
