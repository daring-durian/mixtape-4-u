import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import songs from './songs'
import cartReducer from './cart'
import usersReducer from './admin'
import single_song from './single_song'
import orders from './orders'

const reducer = combineReducers({
  user,
  cartReducer,
  songs,
  single_song,
  usersReducer,
  orders

})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
