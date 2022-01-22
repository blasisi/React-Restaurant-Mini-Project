import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Starters from './starters.png'
function Homepage(props){
    //Took this state to app.js
    //const [customerOrder, setCustomerOrder] = useState([]);

    // function addAutumnSalad(){
    //     
    // }

    // function addRavioli (){
    //     setCustomerOrder(customerOrder.concat("Ravioli"))

    // }

    // function addScallopsfromtheIsleofSkye (){
    //     setCustomerOrder(customerOrder.concat("Scallops from the Isle of Skye"))

    // }
    // function addRoastVealSweetBread (){
    //     setCustomerOrder(customerOrder.concat("Roast Veal Sweet Bread"))

    // }
    // function viewOrder(){
    //     console.log(customerOrder)
    // }
//Amanda here is what i have done on the home page , could you comment on where or what add on other components,as i dont want create another components
//     Autumn salad
// Ravioli
// Scallops from the Isle of Skye
// Roast veal sweetbread
    return (
        <div className="page" >
            <Header goToMenu={props.homepageToMenu} goToContact={props.homepageToContact} goToOrders={props.homepageToOrders} />
            <div className="main">
            <img src={Starters} className="Menu" alt="Starters" />
            {/* I noticed that the type of the button needed to be changed to type="button" so I did that
            <button type="addAutumnSaladBtn" onClick={addAutumnSalad}>Add To Order</button>
            
            <button  type="addRavioliBtn" onClick={addRavioli}>Add To Order</button>
            <button type="addScallopsfromtheIsleofSkyeBtn"onClick={addScallopsfromtheIsleofSkye}>Add To Order</button>
            <button type="buttonBtn"onClick={addRoastVealSweetBread}>Add To Order</button> */}

            {/* I also changed it to a function to be called in app.js */}
            <button type="button" className="autumnSalad menu-btn" onClick={props.addAutumnSalad}>Add To Order</button>
            <button  type="button" className="ravioli menu-btn" onClick={props.addRavioli}>Add To Order</button>
            <button type="button" className="scallopsFromTheIsleOfMan menu-btn" onClick={props.addScallopsfromtheIsleofSkye}>Add To Order</button>
            <button type="button" className="roastVealSweetBread menu-btn" onClick={props.addRoastVealSweetBread}>Add To Order</button>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage;