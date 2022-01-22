import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import OrderList from './components/OrderList';
function Orders(props){
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerPostcode, setCustomerPostcode] = useState("");
    const [customerTelephone, setCustomerTelephone] = useState("");
    const [specialRequests, setSpecialRequests] = useState("");

    const [submittedObject, setSubmittedObject] = useState({});

    useEffect(() => {
  console.log(submittedObject)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedObject)
        
    };
    fetch('http://localhost:6000/', requestOptions)
    .then(response => {
      response.json()})
    .then(data => {
      console.log(data)});
      
}, [submittedObject]);

function submitObject(e){
    e.preventDefault();

    setSubmittedObject({
        "name": customerName,
        "email": customerEmail,
        "address": customerAddress,
        "postcode": customerPostcode,
        "telephone": customerTelephone,
        "productName": props.customerOrderList.join(","),
        "productComments":specialRequests
    })
}

    return (
        <div className="page">
            <Header goToMenu={props.ordersToMenu} goToContact={props.ordersToContact} goToHomepage={props.ordersToHomepage}/>
            <OrderList customerOrder={props.customerOrderList}/>
            <form>
                <label htmlFor='customerName'>Name:</label><br/>
                <input type="text" id="customerName" value={customerName} onChange={setCustomerName} required/><br/>
                <label htmlFor='customerEmail'>Email:</label><br/>
                <input type="email" id="customerEmail" value={customerEmail} onChange={setCustomerEmail} required/><br/>
                <label htmlFor='customerAddress'>Address:</label><br/>
                <input type="text"  id="customerAddress" value={customerAddress} onChange={setCustomerAddress} required/><br/>
                <label htmlFor='customerPostcode'>Postcode:</label><br/>
                <input type="text" id="customerPostcode" value={customerPostcode} onChange={setCustomerPostcode} required/><br/>
                <label htmlFor='customerTelephone'>Telephone:</label><br/>
                <input type="tel" id="customerTelephone" value={customerTelephone} onChange={setCustomerTelephone} required/><br/>
                <label htmlFor='specialRequests'>Special Request:</label><br/>
                <textarea id="specialRequests" value={specialRequests} onChange={setSpecialRequests} ></textarea><br/>
                <button type="submit" onClick={submitObject}>Order</button>
            </form>
            <div>
                Total:
            </div>
            <Footer />
            <div>
                </div>
        </div>
    )
}

export default Orders;