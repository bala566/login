// Write your code here
import './index.css'
import {Component} from 'react'

class Login extends Component {
  state = {login: false}

  change = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state

    return <div>{login ? null : <h1 className="para"> Login </h1>}</div>
  }
}

export default Login
