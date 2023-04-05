import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { AuthFooterSec } from './styled'

const AuthFooter = () => {
  return (
   <Container>
    <Row>
        <AuthFooterSec>
            <ul className='nav_links'>
                <li className='nav_link'>
                    <a href="/">Company</a>
                </li>
                <li className='nav_link'>
                    <a href="/">About Us</a>
                </li>
                <li className='nav_link'> 
                    <a href="/">Team</a>
                </li>
                <li className='nav_link'>
                    <a href="/">Product</a>
                </li>
                <li className='nav_link'>
                    <a href="/">Blog</a>
                </li>
                <li className='nav_link'>
                    <a href="/">Pricing</a>
                </li>
            </ul>
        </AuthFooterSec>
    </Row>
   </Container>
  )
}

export default AuthFooter