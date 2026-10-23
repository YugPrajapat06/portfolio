import React from 'react'
import './landing.scss'
// import Profile from './Profile'
import Opening from './Opening'
import Introduce from './Introduce'
import Project from './Project'
import Ending from './Ending'
const Landing = () => {
  return (
    <div>
      <Opening/>
      <Introduce/>
      <Project/>
      <Ending/>
    </div>
  )
}

export default Landing
