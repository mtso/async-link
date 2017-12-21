import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class AuthenticatedRoute extends Component {
  render() {
    const { sentinelKey, loginPath, component as Component, ...rest } = this.props
    
    const checkName = sentinelKey || 'user'
    const checkValue = this.props[checkName] || null
    
    if (!checkValue) {
      return (
        <Redirect to={loginPath} />
      )
    } else {
      return (
        <Component {...rest} />
      )
    }
  }
}

export default AuthenticatedRoute
