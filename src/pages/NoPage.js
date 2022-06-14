import React from 'react'
import { Link } from 'react-router-dom'

import image from "../assets/images/404.png"

export default function NoPage() {
  return (
    <div className='content-in-center'>
      <div>
        <img src={image} alt="404 page not found" className='img-fluid' />
        <div className="text-center mt-5"><Link to="/" className='btn btn-lg btn-primary'>Go Home</Link></div>
      </div>
    </div>
  )
}
