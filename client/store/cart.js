import axios from 'axios'

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
// const ADD_SONG = 'ADD_SONG';

//ACTION CREATORS
export const getCart = cart => ({
  type: GET_CART,
  cart
})

// export const addSong = (newSong, mixtape) => ({
//   type: ADD_SONG,
//   newSong,
//   mixtape
// })

// THUNK CREATORS
export const fetchCart = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/cart')
    console.log(data)
    dispatch(getCart(data))
  }
}

//rough draft of what I think our function to add songs to cart should look like
// export const addSongToCart = (songId) => {
//   return async (dispatch) => {
//     const { data } = await axios.get(`/api/songs/${songId}`)
//     const cartData = await axios.get('/api/cart')
//     dispatch(addSong(data, cartData.data));
//   }
// }

//INITIAL STATE
const initialState = []

//REDUCER

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return [action.cart]
    default:
      return state
  }
}

export default cartReducer
