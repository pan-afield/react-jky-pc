import { Route, Redirect } from "react-router-dom";
import { getToken } from "@/utils";


const AuthRoute = ({ compoent: Component, ...rest }) => {
    return (
        <Route {...rest} render={porps => {
            if (!getToken()) {
                //未登录
                return (
                    <Redirect to={{ parhname: 'login', state: { from: porps.loaction.pathname } }} ></Redirect>
                )
            }
            return <Component />
        }}>
        </Route>
    )
}

export { AuthRoute }