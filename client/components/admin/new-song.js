import React, {Component} from 'react'
import {connect} from 'react-redux'
//we need a thunk creator to add song
//addSong currently does not exist
import {postSong} from '../../store/songs'

export class NewSong extends Component {
  constructor() {
    super()
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
      await this.props.addNewSong(this.state)
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
          <button type="submit">Submit New Song</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewSong: song => dispatch(postSong(song))
  }
}

export default connect(null, mapDispatchToProps)(NewSong)
