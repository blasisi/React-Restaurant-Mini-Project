import React, {useState} from 'react';
import './App.css';
import Orders from './Orders';
import Menu from './Menu';
import Homepage from './Homepage';
import Contact from './Contact';
import Starters from './Starters';
import Mains from './Mains';
import Deserts from './Deserts';
import Wines from './Wines';

function App() {
  const [translateUnits, setTranslateUnits] = useState("");
  const [customerOrder, setCustomerOrder] = useState([]);

  function goMenu(){
    setTranslateUnits("-100vw");
    return translateUnits;
  }
  function goContact(){
    setTranslateUnits("-200vw");
    return translateUnits;
  }

  function goOrders(){
    setTranslateUnits("-300vw");
    return translateUnits;
  }

  function goStarters(){
    setTranslateUnits("-400vw")
  }

  function goMains(){
    setTranslateUnits("-515vw")
  }

  function goDeserts(){
    setTranslateUnits("-630vw")
  }

  function goWines(){
    setTranslateUnits("-745vw")
  }

  function goHomepage(){
    setTranslateUnits("0vw")
  }


  function addingAutumnSalad(){
    setCustomerOrder(customerOrder.concat({orderName:"Autumn Salad", price:6.99}));
    console.log(customerOrder);
  }
  function addingRavioli(){
    setCustomerOrder(customerOrder.concat({orderName:"Ravioli", price:5.50}));
    console.log(customerOrder)
  }
  function addingScallopsfromtheIsleofSkye(){
    setCustomerOrder(customerOrder.concat({orderName:"Scallops from the Isle of Skye", price:6.50}));
    console.log(customerOrder)
  }
  function addingRoastVealSweetBread(){
    setCustomerOrder(customerOrder.concat({orderName:"Roast Veal Sweet Bread", price:5.00}));
    console.log(customerOrder)
  }
  function addingDoverSoleGrenobloise(){
    setCustomerOrder(customerOrder.concat({orderName:'Dover Sole "Grenobloise"', price:15.99}));
    console.log(customerOrder)
  }
  function addingCornishTurbot(){
    setCustomerOrder(customerOrder.concat({orderName:"Cornish Turbot", price:14.00}));
    console.log(customerOrder)
  }
   function addingRoastPigeon(){
    setCustomerOrder(customerOrder.concat({orderName:"Roast Pigeon", price:30.00}));
    console.log(customerOrder)
  }
  function addingCumbrianBlueGrey(){
    setCustomerOrder(customerOrder.concat({orderName:"100-Day aged Cumbrian Blue Grey", price:50.00}));
    console.log(customerOrder)
  }

 function addingPecanPralineParfait(){
    setCustomerOrder(customerOrder.concat({orderName:"Pecan Praline Parfait", price:15.99}));
    console.log(customerOrder)
  }

  function addingChristmasPuddingSouffle(){
    setCustomerOrder(customerOrder.concat({orderName:"Christmas Pudding Soufflé", price:10.99}));
  }
  function addingClementineParfait(){
    setCustomerOrder(customerOrder.concat({orderName:"Clementine Parfait", price:9.99}));
  }
  function addingCaramelisedAppleTarteTatin(){"Caramelised Apple Tarte Tatin"
    setCustomerOrder(customerOrder.concat({orderName:"Caramelised Apple Tarte Tatin", price:8}));
  }
  function addingSelectionOfCheeses(){
    setCustomerOrder(customerOrder.concat({orderName:"Selection Of Cheeses", price:5.99}))
  }
  function addingCoffeeTeasInfusionsAndPetitsFours(){
    setCustomerOrder(customerOrder.concat({orderName:"Coffee, Teas, Infusions and Petits Fours", price:5.99}))
  }
  return (
    <div className="App">
      <div className="allPages" style={{transform:`translate(${translateUnits}, ${0}px)`,transition:"transform .6s ease-in"}} id="allPages">
          <Homepage homepageToMenu={goMenu} homepageToContact={goContact} homepageToOrders={goOrders} addAutumnSalad={addingAutumnSalad} addRavioli={addingRavioli} addScallopsfromtheIsleofSkye={addingScallopsfromtheIsleofSkye} addRoastVealSweetBread={addingRoastVealSweetBread}  />

          <Menu goToStarters={goStarters} goToMains={goMains} goToDeserts={goDeserts} goToWines={goWines} menuToHomepage={goHomepage} menuToContact={goContact} menuToOrders={goOrders} />

          <Contact contactToMenu={goMenu} contactToHomepage={goHomepage} contactToOrders={goOrders}/>

          <Orders  ordersToMenu={goMenu} ordersToContact={goContact} ordersToHomepage={goHomepage} customerOrderList={customerOrder} />

          <Starters startersToMenu={goMenu} startersToContact={goContact} startersToOrders={goOrders} startersToHomepage={goHomepage} goToMains={goMains} goToDeserts={goDeserts} goToWines={goWines} addAutumnSalad={addingAutumnSalad} addRavioli={addingRavioli} addScallopsfromtheIsleofSkye={addingScallopsfromtheIsleofSkye} addRoastVealSweetBread={addingRoastVealSweetBread} />

          <Mains goToStarters={goStarters} goToDeserts={goDeserts} goToWines={goWines} addDoverSoleGrenobloise={addingDoverSoleGrenobloise} addCornishTurbot={addingCornishTurbot} addRoastPigeon={addingRoastPigeon} addCumbrianBlueGrey={addingCumbrianBlueGrey}/>

          <Deserts goToMains={goMains} goToStarters={goStarters} goToWines={goWines} addPecanPralineParfait={addingPecanPralineParfait} addChristmasPuddingSouffle={addingChristmasPuddingSouffle}addClementineParfait={addingClementineParfait} addCaramelisedAppleTarteTatin={addingCaramelisedAppleTarteTatin} addSelectionOfCheeses={addingSelectionOfCheeses} addCoffeeTeasInfusionsAndPetitsFours={addingCoffeeTeasInfusionsAndPetitsFours}/>
        </div>
      </div>
  );
}

export default App;
