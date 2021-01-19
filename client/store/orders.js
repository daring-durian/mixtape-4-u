import axios from 'axios'

//ACTION TYPES

const GET_ORDERS = 'GET_ORDERS'

//ACTION CREATORS
export const getOrders = orders => ({
  type: GET_ORDERS,
  orders
})

// THUNK CREATORS
// export const fetchOrders = () => {
//   return async dispatch => {
//     const order
//   }
// }

//INITIAL STATE

//REDUCER

export default orders
