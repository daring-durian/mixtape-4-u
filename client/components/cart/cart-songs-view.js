import React from 'react'
import {Button, Media, ListGroup} from 'react-bootstrap'

class Cart_Songs_View extends React.Component {
  render() {
    const mixtape = this.props.mixtape
    const mixtapeMedium = mixtape.medium
    const mixtapeName = mixtape.name
    const mixtapeSongs = mixtape.songs

    return (
      <ListGroup className="list-unstyled">
        <h2>{mixtapeName}</h2>
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
                <h4 className="cart-song-details-name">Song: "{song.name}"</h4>
                <p className="cart-song-details">Artist: {song.artist}</p>
                <p className="cart-song-details">Album: {song.album}</p>
              </Media.Body>
              <Button
                className="cart-song-delete-button"
                variant="outline-secondary"
                size="sm"
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
      </ListGroup>
    )
  }
}

export default Cart_Songs_View
