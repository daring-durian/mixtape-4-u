import axios from 'axios'
import songs from './songs'

//GUEST USER:
//If user is not logged in yet and they start adding
//items to their cart, we need to get them from local storage
export const getLocalStorage = () => {
  try {
    const guestLocalStorage = localStorage.getItem('guestCart')
    return JSON.parse(guestLocalStorage)
  } catch (err) {
    console.log(err)
  }
}
//will need to create func for localStorage.setItem('guestCart', {cart: []}) once we have a way to update our cart
//You can see the data stored in local storage in Chrome under DevTools -> Application -> Local Storage./

//ACTION TYPES
const GET_CART = 'GET_CART'
const ADD_SONG = 'ADD_SONG'
const DELETE_SONG_FROM_CART = 'DELETE_SONG_FROM_CART'

//ACTION CREATORS
export const getCart = cart => ({
  type: GET_CART,
  cart
})

export const addSong = (songId, newSong) => ({
  type: ADD_SONG,
  songId,
  newSong
})

export const deleteSong = songId => ({
  type: DELETE_SONG_FROM_CART,
  songId
})

// THUNK CREATORS
export const fetchCart = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/cart')
    dispatch(getCart(data))
  }
}

export const addSongToCart = songId => {
  return async dispatch => {
    const newSong = await axios.get(`/api/songs/${songId}`)
    await axios.put(`/api/songs/${songId}`, newSong)
    dispatch(addSong(songId, newSong.data))
  }
}

export const deleteSongFromCart = songId => {
  return async dispatch => {
    await axios.put(`/api/cart/${songId}`)
    dispatch(deleteSong(songId))
  }
}

//INITIAL STATE
const initialState = []

//REDUCER
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_SONG:
      return {...state, songs: [...state.songs, action.newSong]}
    case DELETE_SONG_FROM_CART:
      const remainingSongs = state.songs.filter(
        song => song.id !== action.songId
      )
      return {...state, songs: remainingSongs}
    default:
      return state
  }
}

export default cartReducer
