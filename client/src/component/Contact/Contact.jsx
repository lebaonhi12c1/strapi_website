import React from 'react'
import './contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact_heading">
            be in touch with us:
        </div>
        <div className="contact_controls">
            <input type="email" name="contact_email" id="contact_email" />
            <div className='btn_submit'>join us</div>
        </div>
        <div className="contact_social">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <GoogleIcon/>
            <PinterestIcon/>
        </div>
    </div>
  )
}

export default Contact