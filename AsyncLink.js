import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

// Assumes that loadData() returns a Promise.
// Usage:
// <AsyncLink
//   to='/route'
//   onClick={() => dispatch(loadData())}
// />
@withRouter
class AsyncLink extends Component {
  handler = (event) => {
    const { onClick, to, history } = this.props
    
    // Return to use default Link behavior if onClick isn't found.
    if (!onClick) {
      return
    }
    
    event.preventDefault()

    return onClick(event, this.props)
      .then(() => history.push(to))
      .catch(console.error)
  }

  render() {
    // Strip staticContext and onClick from props.
    const { onClick, staticContext, ...rest } = this.props

    return (
      <Link
        onClick={this.handler}
        {...rest}
      />
    )
  }
}

export default AsyncLink
