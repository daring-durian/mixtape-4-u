import React from 'react'
import {Link} from 'react-router-dom'
import HomeImage from '../../public/images/home.svg'
import PropTypes from 'prop-types'
import {Container, ResponsiveEmbed} from 'react-bootstrap'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {name} = props
  return (
    <Container fluid="md">
      <h3>{name ? `Welcome back, ${name}!` : `Welcome To Mixtape 4 U`}</h3>
      <Link to="/songs">
        <ResponsiveEmbed aspectRatio="16by9">
          <embed type="image/svg+xml" src={HomeImage} />
        </ResponsiveEmbed>
      </Link>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    name: state.user.name
  }
}

export default connect(mapState)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  name: PropTypes.string
}
