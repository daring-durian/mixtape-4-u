import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Songs} from './all-songs'
import {Nav, Navbar as BootstrapNavbar, NavDropdown} from 'react-bootstrap'

const Navbar = ({handleClick, isLoggedIn}) => (
  <BootstrapNavbar bg="light">
    <BootstrapNavbar.Brand as={Link} to="/home">
      Mixtape 4 U
    </BootstrapNavbar.Brand>
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

    <BootstrapNavbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/songs">
          Create a mixtape
        </Nav.Link>

        <NavDropdown title="My Account" id="account-dropdown-menu">
          {isLoggedIn ? (
            <NavDropdown.Item to="/" onClick={handleClick}>
              Logout
            </NavDropdown.Item>
          ) : (
            <>
              <NavDropdown.Item as={Link} to="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">
                Sign Up
              </NavDropdown.Item>
            </>
          )}
        </NavDropdown>

        <Nav.Link as={Link} to="/cart">
          <i className="fas fa-shopping-cart" /> Cart
        </Nav.Link>
      </Nav>
    </BootstrapNavbar.Collapse>
  </BootstrapNavbar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
