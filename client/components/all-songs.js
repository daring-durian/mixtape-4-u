import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSongs} from '../store/songs'
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'

/**
 * COMPONENT
 */
class Songs extends Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.loadSongs()
  }
  /*
  add handleclick to add song to cart
  */
  render() {
    console.log('this.props', this.props)
    return (
      <div>{this.props.songs.map(song => <div key={song.id}>HELLO</div>)}</div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  songs: state.songs
})

const mapDispatch = dispatch => {
  return {
    loadSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mapState, mapDispatch)(Songs)

{
  /* <Grid>
<Row className='show-grid'>
  <Col xs={8} md={6}>
    {this.props.songs.map(song => <div key='song.id'>HELLO</div>)}
  </Col>
</Row>
</Grid> */
}
