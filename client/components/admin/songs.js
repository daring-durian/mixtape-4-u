import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//create below thunk creators
import {fetchSongs, deleteSong} from '../../store/admin'
import NewSong from './newSong'
import EditSong from './editSong'
class AdminSongs extends Component {
  componentDidMount() {
    this.props.fetchSongs()
  }

  handleDelete(id) {
    this.props.deleteSong(id)
  }

  render() {
    const {songs} = this.props

    return (
      <div className="adminSongsContainer">
        <NewSong />
        {songs.map(song => {
          return (
            <div className="adminSingleSong" key={song.id}>
              <h1>{song.name} </h1>
              <Link to={`/songs/${song.id}`}>
                <img src={song.imageUrl} />
              </Link>
              <h2>{song.price}</h2>
              <EditSong song={song} />
              <button
                className="adminDeleteSong"
                type="button"
                onClick={() => this.handleDelete(song.id)}
              >
                {' '}
                DELETE SONG
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => ({
  songs: state.songs
})

const mapDispatch = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  deleteSong: id => dispatch(deleteSong(id))
})

export default connect(mapState, mapDispatch)(AdminSongs)
