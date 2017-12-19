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
  handler = (e) => {
    const { onClick, to, history } = this.props
    
    if (!onClick) {
      return
    } else {
      e.preventDefault()
    }
    
    const attributes = {
      ...this.props,
    }

    return onClick(attributes)
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
