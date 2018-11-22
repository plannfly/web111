import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Logo from '../../Atoms/logo'
// import * as userActions from '../actions/user'
import { Link } from 'react-router'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className='headerWrapper'>
        <Logo />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  // userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
