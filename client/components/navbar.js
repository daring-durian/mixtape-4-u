import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Songs} from './all-songs'
import {Nav, Navbar as BootstrapNavbar, NavDropdown} from 'react-bootstrap'

const Navbar = ({handleClick, isLoggedIn, isAdmin}) => (
  <BootstrapNavbar bg="dark" variant="dark" sticky="top">
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
            <>
              <NavDropdown.Item to="/" onClick={handleClick}>
                Logout
              </NavDropdown.Item>

              {isAdmin === 'admin' ? (
                <>
                  <NavDropdown.Item
                    as={Link}
                    to="/admin/users"
                    style={{color: 'red'}}
                  >
                    View All users
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/admin/song"
                    style={{color: 'red'}}
                  >
                    View All Songs
                  </NavDropdown.Item>
                </>
              ) : null}
            </>
          ) : (
            <>
              <NavDropdown.Item as={Link} to="/login" style={{width: '130px'}}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup" style={{width: '130px'}}>
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
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.role
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
