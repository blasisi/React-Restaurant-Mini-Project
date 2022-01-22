import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function Menu(props){
    
    return (
        <div className="page " >
            <Header goToHomepage={props.menuToHomepage} goToContact={props.menuToContact} goToOrders={props.menuToOrders} />
            <div className="menu-items">
                <button type="button" className="menu-item" onClick={props.goToStarters}>Starters</button>
                <button type="button" className="menu-item" onClick={props.goToMains}>Mains</button>
                <button type="button" className="menu-item" onClick={props.goToDeserts}>Deserts</button>
                <button type="button" className="menu-item" onClick={props.goToWines}>Wines</button>
            </div>
            <Footer />
        </div>
    )
}

export default Menu;