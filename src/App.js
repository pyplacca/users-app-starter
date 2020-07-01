import React from "react";
import "./App.css";
import UserItem from "./components/UserItem"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
    // refs
    this._name = React.createRef()
    this._email = React.createRef()
    // submit handler
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (ev) {
    ev.preventDefault()
    // update users list
    this.setState({
      users: [...this.state.users, {
        name:this._name.current.value, 
        email:this._email.current.value
      }]
    })
    // reset input fields
    this._name.current.value = ''
    this._email.current.value = ''
    this._name.current.focus() // redirect focus to the name input
  }

  render() {
    return (
      <div className="App">
        <div className="entry">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Name" ref={this._name}/>
            <br />
            <input type="email" placeholder="Email" ref={this._email}/>
            <br />
            <input type="submit" />
          </form>
        </div>

        <div className="display">
          <h3>List of users</h3>
          <div className="users">
            {
              this.state.users.map(
                (user, i) => <UserItem {...user} key={i}/>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
