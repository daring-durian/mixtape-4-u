import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Button, Card, Container, Form, InputGroup} from 'react-bootstrap'

/**
 * COMPONENT
 */
const AuthForm = props => {
  // name in this case is the name of the form
  const {name, displayName, handleSubmit, error} = props

  const nameField = (
    <InputGroup className="m-2">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <i className="fas fa-portrait" />
        </InputGroup.Text>
      </InputGroup.Prepend>

      <Form.Control
        type="name"
        name="fullName"
        placeholder="enter your name"
        required
      />
    </InputGroup>
  )

  //     {error && error.response && <div> {error.response.data} </div>}
  //   <a href="/auth/google" id='google-login'>{displayName} with Google <i className="fas fa-chevron-right"></i></a>
  // </div>

  return (
    <Container className="align-items-center d-flex" style={{height: '80vh'}}>
      <Form onSubmit={handleSubmit} name={name} className="w-100">
        <InputGroup className="m-2">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-at" />
            </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            type="email"
            name="email"
            placeholder="enter your email"
            required
          />
        </InputGroup>

        <InputGroup className="m-2">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <i className="fas fa-lock" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="password"
            name="password"
            placeholder="enter your password"
            required
          />
        </InputGroup>

        {error && error.response ? (
          <p className="m-2" style={{color: '#b02c2c'}}>
            {error.response.data}
          </p>
        ) : null}

        {displayName === 'Sign Up' ? nameField : null}

        <Button
          variant="primary"
          type="submit"
          className="m-2 w-80"
          size="lg"
          block
        >
          {displayName}
        </Button>

        <Card className="m-2">
          <Card.Body>
            <a href="/auth/google" id="google-login">
              {displayName} with Google <i className="fas fa-chevron-right" />
            </a>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value

      if (formName === 'login') {
        dispatch(auth(email, password, formName))
      } else {
        const fullName = evt.target.fullName.value
        dispatch(auth(email, password, formName, fullName))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
