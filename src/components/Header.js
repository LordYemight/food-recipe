import React from 'react';
import '../css/Header.css';

const Header = () => {


    return (
        <div className='header'>
            <div className="title">
                <a href="/" className="logo">DA<span>MM</span>Y-F<span>OO</span>D</a>
                <p>Exploring Flavor, One Recipe at a Time!</p>
            </div>
            <div className="Desc">
                <p>"Discover Your Culinary Masterpiece – Find Recipes for Your Favorite Dish!"</p>
            </div>
        </div>
    )
}

export default Header;
