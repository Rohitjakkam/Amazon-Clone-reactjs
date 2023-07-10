import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"

function Checkout() {
    const[{ basket }]=useStateValue();
  return (
    <div className='checkout'>
        <img className='checkout__ad' src="https://m.media-amazon.com/images/G/31/img19/AmazonPay/Acko/May21/PC_Dashboar_770x150_02._CB666565828_.jpg" alt="" />

    {basket?.length === 0 (
      <div className="">
        <h2>Your Shopping Basket is Empty!!</h2>
      </div>
    )};


    </div>
  );
}

export default Checkout;