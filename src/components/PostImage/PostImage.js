import React from 'react'
import './PostImage.css'
// import HeaderImg from '../../assets/img/header.jpg'
export default function PostImage(props) {
    console.log(props.url);
    let HeaderImg = props.url;
    return (
        <>
        <img src={HeaderImg} alt='image' className='postImg'/>
        </>
    )
}
