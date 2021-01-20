import axios from 'axios'

//ACTION TYPES
const GOT_USERS = 'GOT_USERS'
const GOT_SINGLE_USER = 'GOT_SINGLE_USER'

//ACTION CREATORS
export const gotUsers = users => ({
  type: GOT_USERS,
  users
})

export const gotSingleUser = user => ({
  type: GOT_SINGLE_USER,
  user
})

//THUNK CREATORS
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/admin/users')
      dispatch(gotUsers(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchSingleUser = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/admin/users/${id}`)
      dispatch(gotSingleUser(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//REDUCER
export default function usersReducer(state = [], action) {
  switch (action.type) {
    case GOT_USERS:
      console.log(action.users)
      return action.users
    case GOT_SINGLE_USER:
      return action.user
    default:
      return state
  }
}
