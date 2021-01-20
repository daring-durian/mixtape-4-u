import React from 'react'
import {
  Accordion,
  Button,
  Container,
  Dropdown,
  Card,
  Media
} from 'react-bootstrap'
import {connect} from 'react-redux'
import {
  fetchCart,
  setLocalStorageItem,
  deleteSongFromCart,
  updateCart,
  setMixtapeType
} from '../../store/cart'
import store from '../../store'

class Cart_Songs_View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      medium: null,
      quantity: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.deleteSongFromCart = this.deleteSongFromCart.bind(this)
  }

  // getCurrentStateFromStore(){
  //   return {
  //     medium: store.getState().cartReducer[0].medium
  //   }
  // }

  // updateStateFromStore(){
  //   const currentState = this.getCurrentStateFromStore()

  //   if (this.state.medium !== currentState){
  //     this.setState(currentState)
  //   }
  // }

  async deleteSongFromCart(songId) {
    await this.props.deleteSong(songId)
    await this.props.getCart()
  }

  componentDidMount() {
    this.props.getCart()
    const currentCart = this.props.currentCart
  }

  componentDidUpdate() {
    const medium = this.state.medium
    const quantity = this.state.quantity
    // only fire the update when both quantity and medium were set
    if (medium && quantity) {
      // console.log('store', store.getState().cartReducer[0].medium)
      // console.log('current state ', medium, quantity)
      this.props.updateCart(medium, quantity)
    }
  }

  handleChange(event) {
    const value = event
    const availableMediums = ['vinyl', 'cassette', 'cd']
    const name = availableMediums.includes(event) ? 'medium' : 'quantity'

    this.setState({
      [name]: value
    })
  }

  render() {
    const mixtape = this.props.mixtape
    const mixtapeMedium = mixtape.medium
    const mixtapeName = mixtape.name
    const mixtapeSongs = mixtape.songs
    const deleteSong = this.props.deleteSong

    return (
      <>
        <Card className="border-0 m-3">
          <h2>{mixtapeName}</h2>
          <Container className="d-flex flex-column ml-0 pl-0">
            <Container className="d-flex inline pl-0 align-items-center">
              <h5 className="m-0">Selected Medium:</h5>
              <Dropdown
                className="m-2"
                name="medium"
                value={this.state.medium}
                onSelect={this.handleChange}
              >
                <Dropdown.Toggle variant="light" id="mixtape-medium-dropdown">
                  {this.state.medium ? this.state.medium : 'no medium selected'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="cassette">cassette</Dropdown.Item>
                  <Dropdown.Item eventKey="vinyl">vinyl</Dropdown.Item>
                  <Dropdown.Item eventKey="cd">cd</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>

            <Container className="d-flex inline pl-0 align-items-center">
              <h5 className="m-0">Selected Quantity:</h5>
              <Dropdown
                className="m-1"
                name="quantity"
                value={this.state.quantity}
                onSelect={this.handleChange}
              >
                <Dropdown.Toggle variant="light">
                  {this.state.quantity ? this.state.quantity : '0'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Container>
          </Container>
        </Card>

        <Accordion defaultActiveKey="0" className="m-2">
          <Card>
            <Accordion.Toggle as={Button} variant={Card.Header} eventKey="0">
              Songs in the mixtape
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {mixtapeSongs.map(song => (
                  <div key={song.id}>
                    <Media as="li" className="m-3">
                      <img
                        width={150}
                        height={150}
                        className="align-self-center mr-3"
                        src={song.imageUrl}
                        className="shadow-lg mb-5 bg-white"
                      />
                      <Media.Body>
                        <h4 className="cart-song-details-name">
                          Song: "{song.name}"
                        </h4>
                        <p className="cart-song-details">
                          Artist: {song.artist}
                        </p>
                        <p className="cart-song-details">Album: {song.album}</p>
                      </Media.Body>
                      <Button
                        className="cart-song-delete-button"
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => deleteSong(`${song.id}`)}
                      >
                        <img
                          width={25}
                          height={25}
                          src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-12/512/Basic_Icons-Mini-Source-04-512.png"
                        />Remove Song
                      </Button>
                    </Media>
                  </div>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
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
    getCart: () => dispatch(fetchCart()),
    updateCart: (medium, quantity) => dispatch(updateCart(medium, quantity)),
    setMixtapeType: () => dispatch(setMixtapeType(type))
  }
}

export default connect(mapState, mapDispatch)(Cart_Songs_View)
