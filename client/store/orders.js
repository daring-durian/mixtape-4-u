import axios from 'axios'

//ACTION TYPES

const GET_ORDERS = 'GET_ORDERS'
const CREATE_ORDER = 'CREATE_ORDER'

//ACTION CREATORS
export const getOrders = orders => ({
  type: GET_ORDERS,
  orders
})

export const createOrder = newOrder => ({
  type: CREATE_ORDER,
  newOrder
})

// THUNK CREATORS
export const fetchOrders = () => {
  return async dispatch => {
    const orders = await axios.get('/api/orders')
    dispatch(getOrders(orders.data))
  }
}

export const createNewOrder = () => {
  return async dispatch => {
    const newOrder = await axios.post('/api/orders/create')
    dispatch(createOrder(newOrder.data))
  }
}

//INITIAL STATE
const initialState = []

//REDUCER
const orders = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    case CREATE_ORDER:
      return [...state, action.newOrder]
    default:
      return state
  }
}

export default orders
