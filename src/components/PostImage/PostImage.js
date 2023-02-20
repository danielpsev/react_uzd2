import React from 'react'
import './PostImage.css'
import HeaderImg from '../../assets/img/header.jpg'
export default function PostImage() {
    return (
        <>
        <img src={HeaderImg} alt='' className='postImg'/>
        </>
    )
}
