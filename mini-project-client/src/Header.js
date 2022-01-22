import React from 'react';
import './App.css';
import OrderBasket from './components/OrderBasket';
function Header(props){
    return (
        <header>
            {/* <img class="header-image" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="background" /> */}
            <div className="logo"><h1>BASE</h1></div>
            
            <nav>
                <ul className="navigation-list">
                    <li className="nav-item" onClick={props.goToHomepage}>Home</li>
                    <li className="nav-item" onClick={props.goToMenu}>Menu</li>
                    <li className="nav-item" onClick={props.goToContact}>Contact</li>
                    <li className="nav-item" onClick={props.goToOrders}>Orders</li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;