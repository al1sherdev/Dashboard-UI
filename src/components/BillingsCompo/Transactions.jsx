import React from 'react';
import { TransactionsNew, TransactionsOld } from '../../assets/contents/Billings/TransactionsContent';
import './styles/billingStyle.scss';

const Transactions = () => {
  return (
    <div className='component'>
      <div className="big__title d-flex align-items-center justify-content-between">
            <h6>Your Transactions</h6>
            <input 
              type="date"
              className='date'  
            />
        </div>
        <div className="title">
          <strong>NEWEST</strong>
        </div>
        {
          TransactionsNew.map((content, index) => {
            return(
              <div key={index} className="news">
                <div className="icon">{content.icon}</div>
                <div className="news__title">
                  <strong>{content.title}</strong>
                  <small>{content.trDate}</small>
                </div>
                <strong>{content.budget}</strong>
              </div>
            )
          })
        }
        <div className="title">
          <strong>YESTERDAY</strong>
        </div>
        {
          TransactionsOld.map((content, index) => {
            return(
              <div key={index} className="news">
                <div className="icon">{content.icon}</div>
                <div className="news__title">
                  <strong>{content.title}</strong>
                  <small>{content.trDate}</small>
                </div>
                <strong>{content.budget}</strong>
              </div>
            )
          })
        }
    </div>
  )
}

export default Transactions