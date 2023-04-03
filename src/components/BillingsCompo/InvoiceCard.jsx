import React from 'react';
import { InvoiceContent } from '../../assets/contents/Billings/Invoice';
import './styles/billingStyle.scss';

const InvoiceCard = () => {
  return (
    <div className='component invoice'>
        <div className="big__title d-flex align-items-center justify-content-between">
            <h6>Invoices</h6>
            <button className='btn btn-info fw-bold color-blue text-info bg-light'>VIEW ALL</button>
        </div>
        <div className="invoices">
                <div className="date">  
                    {
                        InvoiceContent.map((content, index) => {
                            return(
                                <div key={index + content.id}>
                                    <h6>{content.date}</h6>
                                    <p>{content.id}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="dollor">
                    {
                        InvoiceContent.map((content, index) => {
                            return(
                                <div key={index + content.id}>
                                    <p>{content.budget}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="document">
                    {
                        InvoiceContent.map((content, index) => {
                            return(
                                <div key={index + content.id}>
                                    <p>{content.action}</p>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    </div>
  )
}

export default InvoiceCard