import React from 'react'
import { PlatformSettingsAccountContent, PlatformSettingsApplicationContent } from '../../assets/contents/Profile/Platform'
import SwitchControlled from './Switch';
import "./style/profile.scss";

const Platform = () => {
  return (
    <div className='component h-100'>
        <div className="title">
            Platform Settings
        </div>
        <div className="subtitle">
            <p>ACCOUNT</p>
        </div>
        {
            PlatformSettingsAccountContent.map((content, index) => {
                return(
                    <div key={index}  className="platform d-flex align-items-center mt-2" >
                        <SwitchControlled />
                        <p className='ms-3'>{content.text}</p>
                    </div>
                )
            })
        }
        <div className="subtitle mt-4">
            <p>APPLICATION</p>
        </div>
        {
            PlatformSettingsApplicationContent.map((content, index) => {
                return(
                    <div key={index}  className="d-flex align-items-center mt-2" >
                        <SwitchControlled />
                        <p className='ms-3'>{content.text}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Platform