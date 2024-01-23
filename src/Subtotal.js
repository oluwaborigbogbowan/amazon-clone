import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'


function Subtotal() {
  const [{basket}, ] = useStateValue()


  return (
    <div className='subtotal'>
      
      {/* <CurrencyFormat
        renderText={(value)=>(
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox'/> This order contains a gift
            </small>
          </>
        )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
      /> */}
      <p>
              Subtotal ({basket.length} items): <strong>&#8358;{getBasketTotal(basket)}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox'/> This order contains a gift
            </small>
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
 