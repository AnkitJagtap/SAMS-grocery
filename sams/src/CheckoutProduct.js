import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //removing items from basket in data layer
        // we have to dispatch the remove functionin th reducer(data layr) 
        dispatch ({
            // ACTION TYPE 
            type: 'REMOVE_FROM_BASKET',
            // PASS IN ITEM ID 
            id: id,
        })
    }

  return (
    <div  className='checkout_product'>
            <img className='checkProduct__image' src={image} />
            

            <div className='checkProduct__info'>
                <p className='checkProduct__title'>{title}</p>
                <p className='checkProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className='checkProduct__rating'>
                    {/* use trick to render out # of rating star   */}
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))
                    }
                </div>
                <button className='remove__fromBasket' onClick={removeFromBasket} >
                    Remove from basket
                </button>
            </div>
        </div>
  )
}

export default CheckoutProduct