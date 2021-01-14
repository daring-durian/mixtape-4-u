import axios from 'axios'

//ACTION TYPES
const SET_SONG = 'SET_SONG'

//ACTION CREATORS
const setSong = song => {
  return {
    type: SET_SONG,
    song
  }
}

//THUNK
export const fetchSingleSong = songId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/songs/${songId}`)
      dispatch(setSong(data))
      console.log(data)
    } catch (error) {
      console.log('Skipped Track!', error)
    }
  }
}

//REDUCER
export default function single_song(state = {}, action) {
  switch (action.type) {
    case SET_SONG:
      return action.song
    default:
      return state
  }
}
