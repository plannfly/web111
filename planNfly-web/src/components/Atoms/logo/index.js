import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import * as userActions from '../actions/user'
import { Link } from 'react-router'
import './Logo.css'

class Logo extends Component {
  render() {
    return (
      <div className='header'>
        <Link to={'/'}>
          Plan N Fly
        </Link>
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
)(Logo)
