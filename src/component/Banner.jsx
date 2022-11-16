import React from 'react'
import Img from '@/img/timg.jpg'
import Style from '@/css/style.css'
export default function Banner() {
  return (
    <div>
        <img src={Img} style={{width:'100vw',height:'25vh'}}/>
    </div>
  )
}
