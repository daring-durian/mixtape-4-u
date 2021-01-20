import axios from 'axios'

//ACTION TYPES
const GET_CART = 'GET_CART'
const SET_MIXTAPE_MEDIUM = 'SET_MIXTAPE_MEDIUM'
const SET_MIXTAPE_NAME = 'SET_MIXTAPE_NAME'
const SET_QUANTITY = 'SET_QUANTITY'
const UPDATE_CART = 'UPDATE_CART'
const ADD_SONG = 'ADD_SONG'
const DELETE_SONG_FROM_CART = 'DELETE_SONG_FROM_CART'
const SET_LOCAL_STORAGE = 'SET_LOCAL_STORAGE'

//ACTION CREATORS
const getCart = cart => ({
  type: GET_CART,
  cart
})

export const setCart = cart => ({
  type: UPDATE_CART,
  cart
})

// mixtape type and quantity should all be addded to the active order
// and once user submits the order, we will post all of that data to the BE
export const setMixtapeMedium = (medium, id) => ({
  type: SET_MIXTAPE_MEDIUM,
  medium,
  id
})

export const setMixtapeName = name => ({
  type: SET_MIXTAPE_NAME,
  name
})


export const setQuantity = quantity => ({
  type: SET_QUANTITY,
  quantity
})


export const addSong = (newSong, mixtapeId) => ({
  type: ADD_SONG,
  newSong,
  mixtapeId
})

export const deleteSong = (songId, mixtapeId) => ({
  type: DELETE_SONG_FROM_CART,
  songId,
  mixtapeId
})

export const setLocalStorage = entireCart => ({
  type: SET_LOCAL_STORAGE,
  entireCart
})

// THUNK CREATORS
export const fetchCart = () => {
  return async dispatch => {
    const mixtape = await axios.get('/api/cart')
    dispatch(getCart(mixtape.data))
  }
}

export const addSongToCart = (songId, mixtapeId) => {
  return async dispatch => {
    const newSong = await axios.get(`/api/songs/${songId}`)
    await axios.put(`/api/songs/add/${songId}`, newSong.data)
    dispatch(addSong(newSong.data, mixtapeId))
  }
}

export const deleteSongFromCart = (songId, mixtapeId) => {
  return async dispatch => {
    await axios.put(`/api/cart/delete/${songId}`)
    dispatch(deleteSong(songId, mixtapeId))
  }
}

export const updateCart = (medium, quantity, id) => {
  return async dispatch => {
    const updatedMixtapeData = {
      id: id,
      medium: medium,
      quantity: quantity
    }
    await axios.put('/api/cart', updatedMixtapeData)
    dispatch(setMixtapeMedium(medium, id), setQuantity(quantity))
  }
}
//GUEST USER:
//If user is not logged in yet and they start adding
//items to their cart, we need to get them from local storage
export const setLocalStorageItem = entireCart => {
  return async dispatch => {
    try {
      const cartLocalStorage = 'mixtape-4-u-cart'
      localStorage.setItem(cartLocalStorage, JSON.stringify(entireCart))
      dispatch(setLocalStorage(entireCart))
    } catch (err) {
      console.log(err)
    }
  }
}
//will need to create func for localStorage.setItem('guestCart', {cart: []}) once we have a way to update our cart
//You can see the data stored in local storage in Chrome under DevTools -> Application -> Local Storage./

//INITIAL STATE
const initialState = []

//REDUCER
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case UPDATE_CART:
      return action.cart
    case SET_MIXTAPE_MEDIUM:
      const mixtapes = state
      const updatedMixtapes = mixtapes.filter(
        mixtape => mixtape.id === action.id
      )
      return updatedMixtapes
    case SET_MIXTAPE_NAME:
      return {...state, name: action.setMixtapeName}
    case ADD_SONG:
      state.map(mixtape => {
        if ((mixtape.id = action.mixtapeId)) {
          return [{...mixtape, songs: [...mixtape.songs, action.newSong]}]
        }
      })
    case DELETE_SONG_FROM_CART:
    // const currentMixtape = state.filter(mixtape =>
    //   mixtape.id === action.mixtapeId)
    // const mixtapeToUpdate = currentMixtape[0]
    // const remainingSongs = mixtapeToUpdate.songs.filter(song => song.id !== action.songId)
    // return [{ ...state, songs: [remainingSongs] }]
    case SET_LOCAL_STORAGE:
      return [...state]
    default:
      return state
  }
}

export default cartReducer
