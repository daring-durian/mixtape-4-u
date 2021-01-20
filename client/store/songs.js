import axios from 'axios'

//ACTION TYPES
const GOT_SONGS = 'GOT_SONGS'
const ADD_SONG = 'ADD_SONG'
const EDIT_SONG = 'EDIT_SONG'
const DELETE_SONG = 'DELETE_SONG'

//ACTION CREATORS
const gotSongs = songs => ({type: GOT_SONGS, songs})
const addSong = song => ({type: ADD_SONG, song})
const editSong = song => ({type: EDIT_SONG, song})
const deleteSong = songId => ({type: DELETE_SONG, songId})

//THUNK CREATORS
export const fetchSongs = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/songs')
    dispatch(gotSongs(data))
  } catch (err) {
    console.error(err)
  }
}

export const postSong = song => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/songs', song)
      dispatch(addSong(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateSong = (songId, song) => {
  return async dispatch => {
    try {
      await axios.patch(`/api/songs/${songId}`, {song})
      const {data} = await axios.get(`/api/songs/${songId}`)
      dispatch(editSong(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeSong = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/songs/${id}`)
      dispatch(deleteSong)
    } catch (error) {
      console.log(error)
    }
  }
}
//REDUCER
export default function(state = [], action) {
  switch (action.type) {
    case GOT_SONGS:
      return action.songs
    case ADD_SONG:
      return [...state, action.song]
    case EDIT_SONG:
      return state.map(song => {
        if (song.id === action.song.id) {
          return action.song
        }
        return song
      })
    case DELETE_SONG:
      return state.filter(song => song.id !== action.songId)
    default:
      return state
  }
}
