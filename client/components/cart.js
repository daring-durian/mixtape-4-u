// import { Container, Dropdown } from 'react-bootstrap'
import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'

class Cart extends React.Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    await this.props.getCart()
  }

  render() {
    const cart = this.props.currentCart
    const cartSongs = cart.songs
    // const availableMixtapeMediums = cart.medium;
    // const availableMixtapeMediums = ['vinyl', 'cassette', 'cd']

    return (
      <>
        {/* <Container fluid>
        <Dropdown.Menu>
          <Dropdown.Header>Select mixtape medium</Dropdown.Header>

          {availableMixtapeMediums.map(function(medium, index){
            return <Dropdown.Item
              eventKey={index}
              key={index}>
                {medium}
              </Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Container> */}

        <div>
          <section>
            <p> Medium: {cart.medium}</p>
            <p>Name: {cart.name}</p>
            <p>Price: {cart.price}</p>
            <h3>Songs:</h3>
            <div>
              {' '}
              {cartSongs ? (
                <div>
                  {' '}
                  {cartSongs.map(song => (
                    <p key={song.id}>Song Name: {song.name} </p>
                  ))}{' '}
                </div>
              ) : (
                'Empty Cart'
              )}
            </div>
          </section>
        </div>
      </>
    )
  }
}

const mapState = state => {
  return {
    currentCart: state.cartReducer
  }
}

const mapDispatch = dispatch => {
  return {
    getCart: () => dispatch(fetchCart())
  }
}

export default connect(mapState, mapDispatch)(Cart)
