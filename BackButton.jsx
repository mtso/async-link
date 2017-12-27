import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class BackButton extends Component {
  goBack = (e) => {
    e.preventDefault()
    const { history, defaultLink } = this.props

    if (history.length > 1) {
      history.goBack()
    } else {
      history.push(defaultLink)
    }
  }

  render() {
    return (
      <Link
        to='/'
        onClick={this.goBack}
      />
    )
  }
}

export default withRouter(BackButton)
