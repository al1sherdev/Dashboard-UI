import React from 'react';
import { PaymentCardContent } from '../../assets/contents/Billings/Payment';
import "./styles/billingStyle.scss";

const PaymentCard = () => {
  return (
    <div className='margin component'>
        <div className="big__title d-flex align-items-center justify-content-between">
            <h6>Payment Method</h6>
            <button className='btn btn-outline-info bg-light-subtle fw-bold color-light text-info'>+ADD NEW CARD</button>
        </div>
        <div className="payment__method d-flex align-items-center justify-content-between my-3">
            {
              PaymentCardContent.map((content,index) => {
                return(
                  <div key={index} className="card"> 
                    <img src={content.img} alt="img" />
                    <h6>{content.cardNumber}</h6>
                    <p>{content.icon}</p>
                  </div>
                )
              })
            }
        </div>
    </div>
  ) 
}

export default PaymentCard