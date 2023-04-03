import React from 'react'
import { Link } from 'react-router-dom';
import { ConversationsContent } from '../../assets/contents/Profile/Conversations';
import "./style/profile.scss";

const Conversations = () => {
  return (
    <div className='component h-100'>
        <div className="title">
            Conversations
        </div>
        <div className='conversations'>
            {
                ConversationsContent.map((content, index) => {
                    return(
                        <div className='conversations__item'>
                            <img src={content.img} alt="img" />
                            <div className="name">
                                <strong>{content.name}</strong>
                                <p className='text'>{content.msg}</p>
                            </div>
                            <Link to="/profile" className='fw-bold'>REPLY</Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Conversations