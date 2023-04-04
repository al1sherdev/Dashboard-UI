import React from 'react';
import { OrdersCardContent } from '../../assets/contents/Dashboard/Orders';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Orders = () => {      
  return (
    <div className='component order__wrap'>
        <h6>Orders overview</h6>
        <p className='header_title'> <AiOutlineArrowUp className='arrow_up' /> <span>24%</span>this month</p>
        {
            OrdersCardContent.map((content, index) => {
                return(
                    <div key={index} className='order'>
                        <div className="order__icon">
                            {content.icon}
                        </div>
                        <div className="order__info">
                            <p className="title">{content.title}</p>
                            <p className="stitle">{content.subtitle}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Orders