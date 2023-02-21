import React from 'react'
import './PostContent.css'

export default function PostContent(props){
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
