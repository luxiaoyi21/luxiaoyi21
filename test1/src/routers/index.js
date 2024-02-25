import React from "react";

import Home from "../components/Home";

const RouterMap = []

const RouterList = () => {
    const navigate = React.Router.useNavigate()

    React.navigate = navigate

    // 路由守卫子组件
    const AuthRouter = () => {

    }

    return (
        <>
            <React.Router.Routes>
                {/* 默认首页 */}
                <React.Router.Route path='/' element={<Home />}></React.Router.Route>

                <React.Router.Route path='/' element={<><React.Router.Outlet /></>}>
                    {
                        RouterMap.map((item, index) => {
                            return (
                                <React.Router.Route key={index} path={item.path} element={<item.component />}>
                                    {item.children &&
                                        item.children.map((son, idx) => <React.Router.Route key={idx} path={son.path} element={<AuthRouter auth={son.auth ? son.auth : false} component={<son.component />}></AuthRouter>}></React.Router.Route>)
                                    }
                                </React.Router.Route>
                            )
                        })
                    }
                </React.Router.Route>
            </React.Router.Routes>
        </>
    )


}

export default RouterList