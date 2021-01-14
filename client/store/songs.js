import axios from 'axios'

//ACTION TYPES
const GOT_SONGS = 'GOT_SONGS'

//ACTION CREATORS
const gotSongs = songs => ({type: GOT_SONGS, songs})

//THUNK CREATORS
export const fetchSongs = () => async dispatch => {
  try {
    const res = await axios.get('/api/songs')
    dispatch(gotSongs(res.data))
  } catch (err) {
    console.error(err)
  }
}

//REDUCER
export default function(state = [], action) {
  switch (action.type) {
    case GOT_SONGS:
      return action.songs
    default:
      return state
  }
}
