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
    const [responseMessage, setResponseMessage] = useState("");
    const [total, setTotal] = useState(0);

    const [submittedObject, setSubmittedObject] = useState({});

    const [formIsValid, setFormIsValid] = useState(false);


    useEffect(() => {
  console.log(submittedObject)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedObject)
        
    };
    fetch('http://localhost:6000/orders', requestOptions)
    .then(response => {
      response.json()})
    .then(data => {
      console.log(data)});
      
}, [submittedObject]);

function submitObject(e){
    if(customerName.length > 5){
        if(customerAddress.length >10){
            if(customerEmail.includes("@")){
                if(customerEmail.length > 6){
                    if(specialRequests.length > 20){ // Maybe worth removing this as some people won't have anything to enter here
                        if(customerPostcode.length > 6){
                            if(customerTelephone.length >= 11){
                                setFormIsValid(true);
                                setResponseMessage("Thank you! We will get back to you as soon as possible!")

                            }
                        }
                    }
                }
            }
        }
    } else {
        setFormIsValid(false);
        setResponseMessage("Name, email, address or postcode or telephone invalid");
    }

    setCustomerName("");
    setCustomerEmail("");
    setCustomerAddress("");
    setCustomerPostcode("");
    setCustomerTelephone("");
    setSpecialRequests("");
    
    // props.customerOrderList.join(",")

    setSubmittedObject({
        "first_name": customerName.split(" ")[0],
        "last_name": customerName.split(" ")[1] || "",
        "customer_email": customerEmail,
        "delivery_address": customerAddress,
        "delivery_postcode": customerPostcode,
        "customer_telephone": customerTelephone,
        "product_name": "Tester Product, Tester 2",
        "product_comments":specialRequests
    })
    console.log(submittedObject);
}
    function changeCustomerName(e){
        setCustomerName(e.target.value)
    }
    function changeCustomerEmail(e){
        setCustomerEmail(e.target.value)
    }
    function changeCustomerAddress(e){
        setCustomerAddress(e.target.value)
    }
    function changeCustomerPostcode(e){
        setCustomerPostcode(e.target.value)
    }
    function changeCustomerTelephone(e){
        setCustomerTelephone(e.target.value)
    }
    function changeSpecialRequest(e){
        setSpecialRequests(e.target.value)
    }

    return (
        <div className="page">
            <Header goToMenu={props.ordersToMenu} goToContact={props.ordersToContact} goToHomepage={props.ordersToHomepage}/>
            {formIsValid ? (<span className="success">{responseMessage}</span>) :(<span className="danger">{responseMessage}</span>)}
            <OrderList customerOrder={props.customerOrderList}/>
            <form>
                <label htmlFor='customerName'>Name:</label><br/>
                <input type="text" id="customerName" value={customerName} onChange={changeCustomerName} required/><br/>
                <label htmlFor='customerEmail'>Email:</label><br/>
                <input type="email" id="customerEmail" value={customerEmail} onChange={changeCustomerEmail} required/><br/>
                <label htmlFor='customerAddress'>Address:</label><br/>
                <input type="text"  id="customerAddress" value={customerAddress} onChange={changeCustomerAddress} required/><br/>
                <label htmlFor='customerPostcode'>Postcode:</label><br/>
                <input type="text" id="customerPostcode" value={customerPostcode} onChange={changeCustomerPostcode} required/><br/>
                <label htmlFor='customerTelephone'>Telephone:</label><br/>
                <input type="tel" id="customerTelephone" value={customerTelephone} onChange={changeCustomerTelephone} required/><br/>
                <label htmlFor='specialRequests'>Special Request:</label><br/>
                <textarea id="specialRequests" value={specialRequests} onChange={changeSpecialRequest} ></textarea><br/>
                <button type="submit" className="contact-us-send-btn" onClick={submitObject}>Order</button>
            </form>
            <div>
                <p>Total: £{}</p>
            </div>
            <Footer />
            <div>
                </div>
        </div>
    )
}

export default Orders;