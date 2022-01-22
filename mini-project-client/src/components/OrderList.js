import React from 'react';

function OrderList(props) {
    console.log(props.customerOrder)
    return (
        <div className="ordersData">
            <h1>Here is your order</h1>
            <div className="mapping">

                <ul>
                    {props.customerOrder !== undefined ? props.customerOrder.map((order) => {
                        console.log()
                        return(
                        <li>
                            {order}
                        </li>

                        )
                    }): ""}
                </ul>
            </div>
        </div>
    )
}
export default OrderList;