import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import { Facebook, Instagram, Pinterest, WhatsApp } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
        <div className='footer_container'>
            <div className='logo_container'>
                <img src={logo} />
            </div>
            <div className='icons'>
                <Facebook/>
                <Instagram />
                <WhatsApp />
                <Pinterest />
            </div>
        </div>
        <p>All right's reserved</p>
    </footer>
  )
}

export default Footer