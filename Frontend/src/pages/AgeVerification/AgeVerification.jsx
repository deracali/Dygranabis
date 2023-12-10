import React from 'react'
import './AgeVerification.css'
import { Helmet } from 'react-helmet-async'

export default function AgeVerification() {
  return (
    <div id="age-verification" >
       <Helmet>
                <title>Age Verification</title>
            </Helmet>
  <div className="age-verification-main">
    <span className="age-title">Are you 18 or older?</span>
    <span className="age-main-text">You must be of legal age to view our website. Due to legal requirements you must verify your age.</span>
    
    <a href='/index' className="age-button age-yes">I am over 18</a>
    <a href='' className="age-button age-no">Exit</a>
  </div>
</div>
  )
}
