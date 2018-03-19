import React from 'react';
import { Route, Redirect } from 'react-router';

/**
 * Example usage:
 * const privateRoutes = ({ session }) => (
 *   <AuthenticatedRoute
 *     isLoggedIn={session.isLoggedIn}
 *     loginPath='/'
 *     path='/private'
 *     component={PrivateComponent}
 *   />
 * );
 */
const AuthenticatedRoute = ({ sentinelKey, loginPath, ...rest }) => {
  const checkName = sentinelKey || 'isLoggedIn';
  const checkValue = this.props[checkName];

  return !!checkValue ? (
    <Route {...rest} />
  ) : (
    <Redirect to={loginPath} />
  );
};

export default AuthenticatedRoute;
