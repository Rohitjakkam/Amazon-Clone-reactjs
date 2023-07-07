import React from 'react';
import "./Home.css";
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
        <img className='home__image'
        src="https://m.media-amazon.com/images/I/71Em-zkwaxL._SX3000_.jpg" alt="" />


<div className="home__row">

<Product
          id="`111213"
          title="Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display"
          price={107990}
          rating={4}
          image="https://m.media-amazon.com/images/I/710TJuHTMhL._AC_UY218_.jpg"
        />
        <Product
          id="`111214"
          title="Bajaj GX 1 Mixer Grinder,500W Titan Motor,3 Jars,2 in 1 Function Blade,Black"
          price={2399}
          rating={3}
          image="https://m.media-amazon.com/images/I/514VO1z-71L._AC_UY218_.jpg"
        />
</div>

{/* #2 */}
<div className="home__row">

<Product
          id="`111226"
          title="HASHTAG FITNESS 30kg steel home gym set & gym equipments"
          price={5898}
          rating={4}
          image="https://m.media-amazon.com/images/I/810sEcX+LsL._AC_UL400_.jpg"
        />
        <Product
          id="`1112146"
          title="Tools of Titans: The Tactics, Routines and Habits of Billionaires, Icons and World-Class Performers"
          price={696}
          rating={6}
          image="https://m.media-amazon.com/images/I/81Qaq2O8dsL._AC_UY218_.jpg"
        />
        <Product
          id="`111553"
          title="DeckUp Turrano Engineered Wood Study Table and Office Desk (Walnut, Matte Finish)"
          price={5999}
          rating={4}
          image="https://m.media-amazon.com/images/I/91X64+HdchL._AC_UL400_.jpg"
        />
</div>

{/* #3 */}
<div className="home__row">

<Product
          id="`111213"
          title="Samsung 49-inch(123.8cm) Ultra-Wide Dual QHD Monitor, USB Type-C, HAS, QLED Technology, 1800R Curvature, HDR 400, Flicker Free, Eye Saver Mode, LAN Port, (LS49A950UIWXXL, Black)"
          price={150999}
          rating={5}
          image="https://m.media-amazon.com/images/I/81iBw1CczkL._AC_UY218_.jpg"
        />
        
</div>

        
        
    </div>
  )
}

export default Home;