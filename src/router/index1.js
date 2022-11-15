import React from 'react'
import { HashRouter as Router,Route,Link } from 'react-router-dom'
import Home from '@/component/Home'
import News from '@/component/News'
import Books from '@/component/Books'
import Travle from '@/component/Travle'
import Style from '@/css/style.css'

const PrivateRoute=({component:Component,...rest})=>{
    return (
        <Route {...rest} render={(props)=>(
            <Travle></Travle>
        )}>
        </Route>
    )
}
export default function BaseRouter() {
  return (
    <Router>
    <div>
        <ul>
            <li><Link to={'/'}>Home页面</Link></li>
            <li><Link to={'/news?title=react全家桶&content=react-router5'}>News页面</Link></li>
            <li><Link to={'/books/vue/vue-router'}>Books</Link></li>
            <li><Link to={'/play'}>Play页面</Link></li>
            <li><Link to={'/travle'}>Travle页面</Link></li>
        </ul>
        <Route path='/' component={Home} exact></Route>
            <Route path='/news' component={News}></Route>
            <Route path='/books/:title/:content' component={Books} strict></Route>
            <Route path='/play' render={(props)=>{
                console.log(props);
                return (
                    <>
                    Play页面
                    </>
                )
            }}></Route>
            <PrivateRoute path='/travle' component={Travle}/>
    </div>
    </Router>
  )
}
