import React from 'react'
import { BillingInformationContent } from '../../assets/contents/Billings/BillingInfo'

const BillingInfoCard = () => {
  return (
    <div className='component billing__info'>
      <h6>Billing Information</h6>
      {
        BillingInformationContent.map((content, index) => {
          return(
            <div key={index} className='card'>
              <div className="header">
                <div className="name">
                  {content.name}
                </div>
                <div className="edit">
                  {content.iconDelete} <span>Delete</span>
                  {content.iconEdit} <span>Edit</span>
                </div>
              </div>
              <div className="body">
                <small>Company Name: <span>{content.companyName}</span></small>
                <small>Email Address: <span>{content.emailAddress}</span></small>
                <small>VAT Number: <span>{content.vatNum}</span></small>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default BillingInfoCard