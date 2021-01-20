/* global describe beforeEach it */

import {expect, assert} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AdminUsers} from './users'
import {Provider} from 'react-redux'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('ADMIN USERS PAGE', () => {
  let adminUsers
  beforeEach(() => {
    adminUsers = shallow(
      <Provider store={store}>
        <AdminUsers name="Lorelei Persephone" email="lorelei@email.com" />
      </Provider>
    )
  })

  it('should exist', function() {
    assert.isDefined(AdminUsers)
  })

  it('renders the first name and last name in an h2', () => {
    expect(adminUsers.find('h2').text()).to.be.equal('Lorelei Persephone')
  })
})
