import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainsImage from './mains.png'

function Mains(props){
    return (
        <div>
            <Header goToMenu={props.startersToMenu} goToContact={props.startersToContact} goToOrders={props.startersToOrders} goToHomepage={props.startersToHomepage} />
            <img src={MainsImage} style={{height:"45vw"}} className="Menu" alt="Mains" />
            <button type="button" className="doverSoleGrenobloise menu-btn" onClick={props.addDoverSoleGrenobloise}>add to order</button>
            <button type="button" className="addCornishTurbot menu-btn" onClick={props.addCornishTurbot}>add to order</button>
            <button type="button" className="addRoastPigeon menu-btn" onClick={props.addRoastPigeon}>add to order</button>
            <button type="button" className="cumbrianBlueGrey menu-btn" onClick={props.addCumbrianBlueGrey}>add to order</button>

            <button type="button"  onClick={props.goToStarters}>Starters</button>
            <button type="button" className="active">Mains</button>
            <button type="button" onClick={props.goToDeserts}>Deserts</button>
            <button type="button" onClick={props.goToWines}>Wines</button>
            <Footer />
        </div>
    )
}

export default Mains;