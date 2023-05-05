import React from 'react'
import myvideo from './../images/video.mp4'

function Loss() {
  return (
    <video controls width={'500px'} height={'300px'}>
       <source src={myvideo} type="video/mp4"/>
    </video>
  )
}

export default Loss