import React from 'react'
import './Header.css'
import HeaderImg from '../../assets/img/header.jpg'
export default function Header() {
    return (
        <header>
            <h1>Lorem Ipsum</h1>
            <img src={HeaderImg} alt='header-img'/>
        </header>
    )
}
