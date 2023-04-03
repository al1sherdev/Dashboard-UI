import React from 'react';
import { GrowthCardContents } from '../../assets/contents/Dashboard/GrowthCards';
import "../DashboardCompo/styles/dashStyle.scss";

const GrowthCard = () => {
  return (
    <div className='d-flex justify-content-between w-100 my-4'>
        {
            GrowthCardContents.map((content, index) => {
                return(
                    <div key={index} className="growth__card">
                        <div className="growth__card_info">
                            <p className='title'>{content.title}</p>
                            <div className="number">
                                <p className='data'>{content.data}</p>
                                <p className='percent'>{content.percent}</p>
                            </div>
                        </div>
                        <div className="growth__card_icon">
                            {content.icon}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default GrowthCard