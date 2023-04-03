import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ActionsCardContent } from '../../assets/contents/Dashboard/ActionsCard';
import rocketImg from '../../assets/images/rocket.png';


const Actions = () => {
  return (
    <div>
        {
            ActionsCardContent.map((content, index) => {
                return (
                    <div key={index + 1} className='actions__card'>
                        <Row>
                            <Col xl="7">
                                <div className="info">
                                    <p className='title'>{content.title}</p>
                                    <h6 className='stitle'>{content.subtitle}</h6>
                                    <p className='text'>{content.text}</p>
                                    <Link className='link' to="/">Read more</Link>
                                </div>
                            </Col>
                            <Col xl="5">
                                <div className="image">
                                    <img src={rocketImg} alt={content.title} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Actions;