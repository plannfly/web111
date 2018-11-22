import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import * as userActions from '../actions/user'
import { Link } from 'react-router'
import Header from '../../Organisms/header'
// import Header from 'components/Atoms/Header'


class Landing extends Component {
  render() {
    return (
      <div style={{ 'border-width': '1px solid red' }}>
        <Header />
        <Link to={'/welcome'}>
          ENTER
        </Link>
      </div>


      // header
      // logo
      // page buttons
      // content
      // comming soon
      // Seo
      // long text
      // footer
      // links and sitemap
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
)(Landing)
