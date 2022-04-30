import React, { useState } from 'react'
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="orders">
    <h1>Your orders</h1>
    <div className="orders__order">
        {/* {orders?.map(order => (
            <Order order={order} />
        ))} */}
    </div>
</div>
  )
}

export default Orders