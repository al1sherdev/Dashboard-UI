import React from 'react'
import { ProfileDescriptionContent, ProfileDetailsContent } from '../../assets/contents/Profile/ProfileInfo'

const ProfileInfo = () => {
  return (
    <div className='component h-100 padd'>
        <div className="profile__info">
            <div className="title">Profile Information</div>
            <p className='text description'>{ProfileDescriptionContent.text}</p>
            <ul>
                    {
                        ProfileDetailsContent.map((content, index) => {
                            return(
                                <li key={index} className="d-flex">
                                    <strong>{content.title}</strong> 
                                    <p className='detail'>{content.detail}</p>
                                </li>
                            )
                        })
                    }
            </ul>
        </div>
    </div>
  )
}

export default ProfileInfo