import React, {Component} from 'react'
import {connect} from 'react-redux'
//We need to add an admin file to the store folder
//& import its getUsers Thunk
//so fetchUsers below does exist yet
import {fetchUsers} from '../../store/admin'
import {Link} from 'react-router-dom'

export class AdminUsers extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    return (
      <div>
        <h1>All Users</h1>
        {this.props.users.map(user => {
          return (
            <div key={user.id}>
              <h2>
                <Link to={`/admin/users/${user.id}`}>{user.name}</Link>
              </h2>
              <h4>{user.email}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.usersReducer
  }
}

const mapDispatch = dispatch => {
  return {
    getUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapState, mapDispatch)(AdminUsers)
