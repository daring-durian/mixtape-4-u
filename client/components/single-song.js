import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleSong} from '../store/single_song'
import {addSongToCart, fetchCart} from '../store/cart'
import {createNewOrder} from '../store/orders'
import {Container, Row, Card, Col, Accordion, Button} from 'react-bootstrap'


class Single_Song extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    try {
      this.props.fetchSingleSong(this.props.match.params.songId)
      this.props.loadCart()
    } catch (error) {
      console.log('I hate this song', error)
    }
  }


  async handleClick(songId) {
    const currentMixtape = this.props.cart[0]
    if (currentMixtape) {
      this.props.addSong(songId, currentMixtape.id)
      this.props.loadCart()
    } else {
      await this.props.createOrder()
      this.props.loadCart()
      await this.props.addSong(songId, this.state.currentMixtape.id)
    }
  }

  render() {
    const song = this.props.song
    const currentMixtape = this.props.cart[0]
    return (
      <Container fluid>
        <Row>
          <h1>
            {song.name} by {song.artist}
          </h1>
        </Row>
        <Row>
          <Col xs={4}>
            <Card style={{width: '20rem'}}>
              <Card.Img variant="top" src={song.imageUrl} />
              <Card.Body>
                <Card.Title>
                  <b>Album: </b>
                  {song.album}
                </Card.Title>
                <Card.Subtitle>
                  <b>Year: </b>
                  {song.year}
                </Card.Subtitle>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="secondary"
                  type="submit"
                  className="add-song"
                  onClick={() => this.handleClick(song.id, currentMixtape.id)}
                >
                  <i className="fas fa-cart-plus" />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <iframe
              src={song.songUrl}
              width="500"
              height="250"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
            <Col style={{padding: '1px', width: '500px'}} />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    song: state.single_song,
    cart: state.cartReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleSong: id => dispatch(fetchSingleSong(id)),
    loadCart: () => dispatch(fetchCart()),
    addSong: (songId, mixtapeId) => dispatch(addSongToCart(songId, mixtapeId)),
    createOrder: () => dispatch(createNewOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Single_Song)
