/* eslint-disable react/no-unused-state */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateSong} from '../../store/songs'
import {Button, Form, Col} from 'react-bootstrap'

export class EditSong extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: '',
      album: '',
      year: '',
      tags: '',
      price: 0,
      songUrl: '',
      imageUrl: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit(event) {
    try {
      event.preventDefault()
      const songId = this.props.song.id
      const songBody = this.state
      await this.props.updateSong(songId, songBody)
      await this.setState({
        artist: '',
        album: '',
        year: '',
        tags: '',
        price: 0,
        songUrl: '',
        imageUrl: ''
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridArtist">
            <Form.Label>Artist</Form.Label>
            <Form.Control type="artist" placeholder="Artist" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAlbum">
            <Form.Label>Album</Form.Label>
            <Form.Control type="album" placeholder="Album" />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridImageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control placeholder="Image URL" />
        </Form.Group>
        <Form.Group controlId="formGridSongUrl">
          <Form.Label>Song URL</Form.Label>
          <Form.Control placeholder="Song URL" />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control as="select" defaultValue="select">
              <option name="rock">select</option>
              <option name="rock">rock</option>
              <option name="r&b">r&b</option>
              <option name="hip hop">hip hop</option>
              <option name="electronic">electronic</option>
              <option name="classical">classical</option>
              <option name="disco">disco</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridYear">
            <Form.Label>Year</Form.Label>
            <Form.Control type="year" placeholder="Year" />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" className="delete-song">
          Submit
        </Button>
      </Form>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    updateSong: (songId, songBody) => dispatch(updateSong(songId, songBody))
  }
}

export default connect(null, mapDispatch)(EditSong)
