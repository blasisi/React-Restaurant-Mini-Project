import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import WinesImage from './wines.png'

function Wines(props){
    return (
        <div>
            <Header />
            <img src={WinesImage} className="Menu" alt="Wines" />
            <button type="button" onClick={props.goToStarters}>Starters</button>
            <button type="button" onClick={props.goToMains}>Mains</button>
            <button type="button" onClick={props.goToDeserts}>Deserts</button>
            <button type="button" className="active" >Wines</button>
            <Footer />
        </div>
    )
}

export default Wines;