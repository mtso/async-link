
class AuthenticatedRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRedirect: false,
    }
  }
  
  render() {
    const { user, sentinelKey, loginPath } = this.props
    
    const checkName = sentinelKey || 'user'
    
    const userValue = this.props[checkName] || null
    
    if (!userValue) {
      return (
        <Redirect
          to={loginPath}
        />
      )
    } else {
      
    }
  }
}

export default AuthenticatedRoute
