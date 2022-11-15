import React from 'react'

export default function Books(props) {
    console.log('books props',props.match.params);
    let {title,content}=props.match.params
  return (
    <div>
        <h3>Books</h3>
        title:{title}<br/>
        content:{content}
    </div>
  )
}
