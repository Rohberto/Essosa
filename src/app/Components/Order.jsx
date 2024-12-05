import React from 'react';


const Order = () => {
  return (
    <div className='order_container' data-scroll-section>
        <div className="order_content">
            <h1>How to Order Your Custom Dress</h1>
            <h4>step by step process:</h4>
            <p>Ready to bring your dream dress to life? Follow our simple, four-step process from consultation to delivery, and let Essosa Fashion craft a piece that’s uniquely yours.</p>
        </div>
        <div className="arrowImage">
            <img src="/arrow.png" alt="arrow icon" />
        </div>
        <div className="order_cards">
            <div className="card_group"> 
            <div className="card_img_container"><img src="/card1.png" alt="card 1" /></div>
            <div className="card_img_container"><img src="/card2.png" alt="card 1" /></div>
            </div>
            <div className="card_group"> <div className="card_img_container"><img src="/card3.png" alt="card 1" /></div>
            <div className="card_img_container"><img src="/card4.png" alt="card 1" /></div></div>
        </div>
    </div>
  )
}

export default Order
