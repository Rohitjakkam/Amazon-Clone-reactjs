import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const[{ basket }]=useStateValue();
  return (
      <div className='checkout'>
        <div className="checkout__left">
          <img className='checkout__ad' src="https://m.media-amazon.com/images/G/31/img19/AmazonPay/Acko/May21/PC_Dashboar_770x150_02._CB666565828_.jpg" alt="" />

            {basket?.length === 0 ? (
                <div className="">
                  <h2>Your Shopping Basket is Empty!!</h2>
                  <p>
                    You have on items in your basket. To buy one or more items, click
                    "Add to Basket" next to the item.
                  </p>
                </div>
            ): (
                <div>
                  <h2 className='checkout__title'>Your Shopping Basket </h2>

                  {basket.map((item) => (
                  <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                  ))}
        </div>
          )}
          </div>
          
      {basket.length>0&&(
      <div className="checkout__right">
        <h1>Hello ji </h1>
      {/* <Subtotal /> */}
      </div>
    )}
    </div>
    
    );
  };

  export default Checkout;
