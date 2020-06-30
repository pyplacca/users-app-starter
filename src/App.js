import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/* Form to add new user */}
        <div>
          <form>
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="submit" />
          </form>
        </div>

        {/* List of users */}
        <div>
          <h3>List of users</h3>
        </div>
      </div>
    );
  }
}

export default App;
