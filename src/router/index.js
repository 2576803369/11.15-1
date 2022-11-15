import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Home from '@/component/Home'
import News from '@/component/News'
import Books from '@/component/Books'
import Travle from '@/component/Travle'
import Style from '@/css/style.css'
//创建一个路由组件--私有路由---vue中叫路由守卫
//功能：给路由表中添加一条路由，并且在函数中执行一些业务
const PrivateRoute=({component:Component,...rest})=>{
    //业务代码//动态跳转
    return (
        <Route {...rest} render={props=>(<Travle {...props}/>)}></Route>
    )
}
const BaseRouter=()=>{
    return (
        <Router>
            <div>
                <ul className={Style.nav}>
                    <li><Link to="/">Home页面</Link></li>
                    <li><Link to="/news?title=react全家桶&content=react-router5">News页面</Link></li>
                    <li><Link to={{
                           pathname:"/news",
                           search:"?title=react全家桶&content=react-router5",
                           }}>News页面</Link></li>
                    <li><Link to="/books/vue/vue-router">books页面</Link></li>
                    <li><Link to="/play">play页面</Link></li>
                    <li><Link to="/travle">travle页面</Link></li>
                </ul>
                <Route exact path="/" component={Home}></Route>
                <Route path="/news" component={News}></Route>
                <Route path="/books/:title/:content" component={Books}></Route>
                <Route path="/play" render={(props)=>{
                    console.log("Play props",props);
                    return (
                        <div className={Style.container}>
                            <h3>play页面</h3>
                        </div>
                    )
                }}></Route>
                <PrivateRoute path="/travle" component={Travle}/>
            </div>
        </Router>
    )
}
export default BaseRouter;