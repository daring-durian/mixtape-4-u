import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../../store/admin'
import {Link} from 'react-router-dom'
import {ListGroup} from 'react-bootstrap'

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
            <ListGroup key={user.id}>
              <ListGroup.Item>
                <Link to={`/admin/users/${user.id}`}>{user.name}</Link>
                <p>{user.email}</p>
              </ListGroup.Item>
            </ListGroup>
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
