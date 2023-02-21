import React from 'react'
import './Header.css'
import HeaderImg from '../../assets/img/header.jpg'
export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <img src={HeaderImg} alt='header-img'/>
        </header>
    )
}
