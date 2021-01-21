/* eslint-disable react/no-unused-state */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateSong} from '../../store/songs'
import {Button} from 'react-bootstrap'

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
    this.setState({[event.target.artist]: event.target.value})
  }

  async handleSubmit(event) {
    try {
      event.preventDefault()
      const songId = this.props.song.id
      const songBody = this.state
      await this.props.editSong(songId, songBody)
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
      <div className="newSong">
        <form onSubmit={this.handleSubmit}>
          <input
            className="newSongInput"
            type="text"
            name="artist"
            placeholder="Artist Name"
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <input
            className="newSongInput"
            type="text"
            name="album"
            placeholder="Album"
            value={this.state.album}
            onChange={this.handleChange}
          />
          <input
            className="newSongInput"
            type="number"
            name="year"
            placeholder="Year"
            value={this.state.year}
            onChange={this.handleChange}
          />
          <input
            className="newSongInput"
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <input
            className="newSongInput"
            type="text"
            name="songUrl"
            placeholder="Song URL"
            value={this.state.songUrl}
            onChange={this.handleChange}
          />
          <select
            className="newSongInput"
            type="text"
            name="tags"
            value={this.state.tags}
            onChange={this.handleChange}
          >
            <option>Tags:</option>
            <option name="rock">rock</option>
            <option name="r&b">r&b</option>
            <option name="hip hop">hip hop</option>
            <option name="electronic">electronic</option>
            <option name="classical">classical</option>
            <option name="disco">disco</option>
          </select>
          <div>
            <Button
              variant="secondary"
              className="editSongAdmin"
              type="submit"
              onClick={() => () => this.handleSubmit(song.id)}
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    editSong: (songId, songBody) => dispatch(updateSong(songId, songBody))
  }
}

export default connect(null, mapDispatch)(EditSong)
