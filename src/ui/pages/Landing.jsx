import React, { useState } from 'react'
import './landing.scss'
// import Profile from './Profile'
import Opening from './Opening'
import Introduce from './Introduce'
import Project from './Project'
import Ending from './Ending'
import Loader from '../components/Loader'
const Landing = () => {

  const [loading, setLoading] = useState(true)

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />
  }
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
