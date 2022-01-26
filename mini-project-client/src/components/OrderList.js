import React from 'react';

function OrderList(props) {
    console.log(props.customerOrder)
    return (
        <div className="ordersData">
            <h1>Here is your order</h1>
            <div className="mapping">

                <ul>
                    {props.customerOrder !== undefined ? props.customerOrder.map((order) => {
                     
                        return(
                        <li>
                            <div className="order">
                               <span>{order.orderName}</span><br/>
                               <span>£{order.price}</span><br/>
                               <button type="button" className="btn">remove</button>
                            </div>
                        </li>

                        )
                    }): ""}
                </ul>
            </div>
        </div>
    )
}
export default OrderList;