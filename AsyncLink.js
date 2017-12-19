import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Usage:
// <AsyncLink
//   to='/route'
//   onClick={() => dispatch(loadData())}
// />

@withRouter
class AsyncLink extends Component {
  handler = (e) => {
    e.preventDefault()

    const { onClick, to, history } = this.props

    if (onClick) {
      const attributes = {
        {...this.props}
      }

      return onClick(attributes)
        .then(() => {
          // push history after successful dispatch
          history.push(to)
        })

    } else {
      return new Promise((resolve, reject) => {
        history.push(to)
        resolve()
      })
    }
  }

  render() {
    const { onClick, ...rest } = this.props
    return (
      <Link
        onClick={this.handler}
        {...rest}
      />
    )
  }
}

export default AsyncLink
