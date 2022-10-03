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
          <button className="button" type="button" onClick={this.change}>
            {login ? <Logout /> : <Login />}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
