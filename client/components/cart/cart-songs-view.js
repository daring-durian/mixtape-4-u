import React from 'react'
import {
  Accordion,
  Button,
  Container,
  Dropdown,
  Card,
  Media
} from 'react-bootstrap'

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
  
  async deleteSongFromCart(songId) {
    await this.props.deleteSong(songId)
    await this.props.getCart()
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
          <Container className="d-flex justify-content-space-between">
            <Dropdown
              className="m-1"
              name="medium"
              value={this.state.medium}
              onSelect={this.handleChange}
            >
              <Dropdown.Toggle variant="light" id="mixtape-medium-dropdown">
                Select medium
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="cassette">cassette</Dropdown.Item>
                <Dropdown.Item eventKey="vinyl">vinyl</Dropdown.Item>
                <Dropdown.Item eventKey="cd">cd</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* will this break when second mixtape dropdown will be opened?? */}
            <Dropdown
              className="m-1"
              name="quantity"
              value={this.state.quantity}
              onSelect={this.handleChange}
            >
              <Dropdown.Toggle variant="light">Select quantity</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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

export default Cart_Songs_View
