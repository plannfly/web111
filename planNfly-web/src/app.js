import React, { Component } from 'react'
import _ from 'lodash'
//import injectTapEventPlugin from 'react-tap-event-plugin'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin()

export default class App extends Component {
  render() {
    //  <MuiThemeProvider>
    //  </MuiThemeProvider>
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
