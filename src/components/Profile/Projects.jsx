import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ProfileProjectsContent } from '../../assets/contents/Profile/ProjectContent';


const Projects = () => {
  return (
    <div className='component mt-5 projects'>
      <div className="title">Projects</div>
      <p>Architects design houses</p>
      <Row>
      {
        ProfileProjectsContent.map((content, index) => {
          return(
            <Col xl="12" className='w-25'>
              <div className='box' key={index}>
                <img src={content.img} alt="img" />
                <p>{content.number}</p>
                <strong>{content.name}</strong>
                <p>{content.description}</p>
                <button className='btn btn-info fw-bold color-blue text-info bg-light'>VIEW PROJECTS</button>
              </div>
            </Col>
          )
        })
      }
      <Col className='w-25'>
        <div className="new__box border">
          <div>
            <div className='plus'>+</div>
            <div className='new'>NEW PROJECT</div>
          </div>
        </div>
      </Col>
      </Row>
    </div>
  )
}

export default Projects