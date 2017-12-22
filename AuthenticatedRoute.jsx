import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

class AuthenticatedRoute extends Component {
  render() {
    const { sentinelKey, loginPath, ...rest } = this.props

    const checkName = sentinelKey || 'user'
    const checkValue = this.props[checkName] || null

    return !!checkValue ? (
      <Redirect to={loginPath} />
    ) : (
      <Route {...rest} />
    )
  }
}

export default AuthenticatedRoute
