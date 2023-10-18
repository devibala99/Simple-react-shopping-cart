import React from 'react';
import { FaCartPlus, FaHeart } from "react-icons/fa6";
const Header = ({ title, itemsCount , setShow}) => {

    return (
        <div className='App'>
            <header>
                <h1 onClick={() => setShow(true)}>{title}</h1>
                <section>
                    <button className='wishlist'><FaHeart /></button>
                    <div className='cartClass'>
                        <div className='itemInCart' onClick={() => setShow(false)}><FaCartPlus />{itemsCount}</div>
                    </div>
                </section>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Book App',
    itemsCount: 0
}

export default Header
