import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Button, Card, Container, Form, InputGroup} from 'react-bootstrap'

class Single_Song extends React.Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/songs/:songid')
  }

  render() {
    const {name, artist, album, year, tags, imageUrl, songUrl} = data.body
    return (
      <Container>
        <Row>
          <h1>
            {name} by {artist}
          </h1>
        </Row>
        <Row>
          <Col>
            <Image src="imageUrl" rounded />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                <b>Album:</b> {album}
              </li>
              <li>
                <b>Year:</b> {year}
              </li>
              <li>
                <b>Tags:</b> {tags}
              </li>
            </ul>
          </Col>
          <Col />
          <Col />
        </Row>
      </Container>
    )
  }
}
