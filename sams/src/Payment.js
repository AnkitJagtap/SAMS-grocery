
import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='payment'>
    <div className='payment__container'>
        <h1>
            Checkout (
                <Link to='/checkout'>
                    {basket?.length} items
                </Link>
                ) 
        </h1>

        {/* payment section adress  */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivery Address</h3>
            </div>

            <div className='payment__address'>
                <p>{user?.email}</p>
                <p>2524 Flag Staff House</p>
                <p>Accra, Ghana</p>
            </div>
        </div>

        {/* payment section review items  */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review items and delivery</h3>
            </div>

            <div className='payment__items'>
            {/* ruse check out items here again  */}
                {basket.map(item => (
                    <CheckoutProduct
                    key={item.index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
               />
                ))}

            </div>
        </div>

        {/* payment section payment method  */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Payment Method</h3>
            </div>

            <div className='payment__details'>
                {/* stripe stuff  */}

                {/* <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange} />
                </form> */}

            </div>
        </div>

    </div>
</div>
  )
}

export default Payment