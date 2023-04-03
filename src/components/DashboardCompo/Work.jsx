import React from 'react';
import { Link } from 'react-router-dom';
import { WorkCardContents } from '../../assets/contents/Dashboard/Work';
import bgImg from '../../assets/images/bgImg.jpg';

const Work = () => {
  return (
    <div>
        {
            WorkCardContents.map((content, index) => {
                return (
                    <div 
                        key={index}
                        className='work__card'
                        style={{
                            backgroundImage: `url(${bgImg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "36vh",
                            color: "#fff",
                          }}
                    >
                        <h1 className='title'>{content.title}</h1>
                        <p className='text'>{content.text}</p>
                        <Link className='link' to="/">Read more</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Work