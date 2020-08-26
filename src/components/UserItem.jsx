import React from "react";

class UserItem extends React.Component {

  render() {
    const {name, email} = this.props
    return (
      <div className="App__user-item">
        <h3 className="name">{name}</h3>
        <h5 className="email">{email}</h5>
      </div>
    );
  }
}

export default UserItem;
