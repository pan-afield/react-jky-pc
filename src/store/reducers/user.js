import { getToken } from "@/utils"

//登录功能，只需储存token
const initialState = {
    token: getToken()
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'user/setToken':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}

export default user