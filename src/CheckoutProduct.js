import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {
    const [ dispatch] = useStateValue()

    const removeFromBasket= () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt='product'/>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
          .fill()
          .map((_)=> (
            <p>&#x2B50;</p>
          ))
          }
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
