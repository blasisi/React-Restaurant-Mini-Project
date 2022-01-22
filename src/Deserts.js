import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import DesertsImage from './deserts.png'

function Deserts(props){
    return (
        <div>
            <Header goToMenu={props.startersToMenu} goToContact={props.startersToContact} goToOrders={props.startersToOrders} goToHomepage={props.startersToHomepage}/>
            <img src={DesertsImage} className="Menu" alt="Deserts" />
            <button type="button" className="pecanPralineParfait menu-btn" onClick={props.addPecanPralineParfait}>add to order</button>
            <button type="button" className="christmasPuddingSouffle menu-btn" onClick={props.addChristmasPuddingSouffle}>add to order</button>
            <button type="button" className="clementineParfait menu-btn" onClick={props.addClementineParfait}>add to order</button>
            <button type="button" className="caramelisedAppleTarteTatin menu-btn" onClick={props.addCaramelisedAppleTarteTatin}>add to order</button>
            <button type="button" className="selectionOfCheeses menu-btn" onClick={props.addSelectionOfCheeses}>add to order</button>
            <button type="button" className="coffeeTeasInfusionsAndPetitsFours menu-btn" onClick={props.addCoffeeTeasInfusionsAndPetitsFours}>add to order</button>

            <button type="button" onClick={props.goToStarters}>Starters</button>
            <button type="button" onClick={props.goToMains}>Mains</button>
            <button type="button" className="active">Deserts</button>
            <button type="button" onClick={props.goToWines}>Wines</button>
            <Footer />
        </div>
    )
}

export default Deserts;