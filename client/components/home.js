import React from 'react'
import {Link} from 'react-router-dom'
import HomeImage from '../../public/images/home.svg'
/**
 * COMPONENT
 */
const Home = () => {
  return (
    <div>
      <div className="mainContainer">
        <Link to="/songs">
          <img src={HomeImage} />
        </Link>
      </div>
    </div>
  )
}

export default Home
