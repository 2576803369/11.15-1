import React from 'react'

export default function News(props) {
    console.log(props);
    let url=new URLSearchParams(props.location.search)
    let title=url.get('title')
    let content=url.get('content')
  return (
    <div>
        <h3>New页面</h3>
        title:{title}<br/>
        content:{content}
    </div>
  )
}
