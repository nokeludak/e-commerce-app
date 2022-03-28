import React from 'react'
import { Send } from "@mui/icons-material"
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className='news-container'>
        <h1 className='title-container'>Newsletter</h1>
        <div className='desc'>Get timely updates from your favorite products.</div>
        <div className='input-container'>
        <input className="input" placeholder='Your email'/>
        <button className='button-send'>
        <Send />
        </button>
        
        </div>
    </div>
  )
}


export default Newsletter;
