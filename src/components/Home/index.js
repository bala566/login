// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {login: false}

  change = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state
    const text = login ? 'Welcome User' : 'Please Login'

    return (
      <div className="bg">
        <div className="card">
          <Message text={text} />
          <button type="button" className="button" onClick={this.change}>
            {login ? <Login /> : <Logout />}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
