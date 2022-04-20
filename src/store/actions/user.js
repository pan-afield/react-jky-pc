
import { http, setToken } from "@/utils";

export const login = (mobile, code) => {
    return async dispatch => {
        // const res = await axios.post('http://geek.itheima.net/v1_0/authorizations', {
        //     mobile,
        //     code
        // })
        const data = await http.post('/authorizations', {
            mobile,
            code
        })
        setToken(data.token)
        const { token } = data
        localStorage.setItem('geek-pc-token', token)
        dispatch({ type: 'login/setToken', payload: token })
    }
}