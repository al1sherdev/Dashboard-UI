import React from 'react';
import { DebitCardContent } from '../../assets/contents/Billings/DebitCardContent';
import './styles/billingStyle.scss';

const DebitCard = () => {
  return (
    <div 
        className='component'
        style={{
            backgroundImage: `url(${DebitCardContent.backgroundImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "center",
            height: "90%",
        }}
    >
        <div className="debit__card">
          {DebitCardContent.icon}
          <h6 className='card__num'>{DebitCardContent.cardNum}</h6>
          <div className="card__info w-100 d-flex align-items-center">
            <div className="card__holder w-100">
              <p>Card Holder</p>
              <h6>{DebitCardContent.cardHolder}</h6>
            </div>
            <div className="Expires ms-5">
              <p>Expires</p>
              <h6>{DebitCardContent.expireDate}</h6>
            </div>
            <div className="image w-100 d-flex justify-content-end">
              <img src={DebitCardContent.cardType} alt="img" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default DebitCard