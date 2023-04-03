import React from 'react';
import { BudgetCardContent } from '../../assets/contents/Billings/BudgetCardContent';

const BudgetCard = () => {
  return (
    <div className='component'>
        {
            BudgetCardContent.map((content, index) => {
                return (
                  <div key={index} className="budget__card">
                    <div className="icon">
                      {content.icon}
                    </div>
                    <h5>{content.title}</h5>
                    <p>{content.text}</p>
                    <h4>{content.budget}</h4>
                  </div>
                )
            })
        }
    </div>
  )
}

export default BudgetCard