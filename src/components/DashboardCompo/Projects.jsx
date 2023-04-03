import React from 'react';
import { ProjectsCardTableBody } from '../../assets/contents/Dashboard/Projects';
import { IoMdDoneAll, IoMdMore } from 'react-icons/io/index.esm';
import './styles/dashStyle.scss';

const Projects = () => {
  return (
    <div className='component'>
        <div className='project d-flex justify-content-between'>
            <div className="project__title">
                <h5>Projects</h5>
                <p> <IoMdDoneAll /> <span>30 done</span> this month</p>
            </div>
            <div className="icon">
                <IoMdMore className="pointer" /> 
            </div>
        </div>
        <div className="table__head">
            <p>COMPANIES</p>
            <p>MEMBERS</p>
            <p>BUDGET</p>
            <p>COMPLETION</p>
        </div>
        {
            ProjectsCardTableBody.map((content, index) => {
                return (
                    <div className="table__body">
                        <div className="companies">
                            <img key={index} src={content.img} alt="" />
                            <h6>{content.name}</h6>
                        </div>
                        <div className="members">
                            {content?.members?.map((item, index) => {
                                return (
                                    <img 
                                        key={index} 
                                        src={item}
                                        alt="" />
                                )
                            })}
                        </div>
                        <div className="budget">
                            <p>{content.budget}</p>
                        </div>
                        <div className="completion">
                            {
                                content.completition
                            } %
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Projects