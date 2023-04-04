import React from 'react'
import { ProfileInfoContent, ProfileTopHeaderIconContent } from '../../assets/contents/Profile/ProfileNavInfo'

const ProfileNav = () => {
  return (
    <div className='component profile_nav'>
        <div className="person_info">
            <div className="image">
                <img src={ProfileInfoContent.img} alt="img" />
            </div>
           <div className="name">
                <h6>{ProfileInfoContent.name}</h6>
                <p>{ProfileInfoContent.msg}</p>
           </div>
        </div>
        <div className="assets">
            {
                ProfileTopHeaderIconContent.map((content, index) => {
                    return(
                        <div className="icons">
                            <span>{content.icon}</span>
                            <span>{content.title}</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProfileNav