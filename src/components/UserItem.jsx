import React from "react";
import { connect } from 'react-redux'
import { deleteUser } from '../store/actions'
import { Link } from 'react-router-dom'


function UserItem ({name, email, id, deleteUser}) {
	return (
		<div className="App__user-item">
			<div className="App__user-item__info">
				<h3 className="name">{name}</h3>
				<h5 className="email">{email}</h5>
			</div>
			<div className="icons">
			{/*
				<Link to={`/edit/${id}`}>
					<span
						title="edit user"
						role="img"
						aria-label="icon"
						aria-hidden="true"
					>&#9998;</span>
				</Link>
			*/}
				<span
					title="delete user"
					role="img"
					aria-label="icon"
					aria-hidden="true"
					onClick={() => deleteUser(id)}
				>&#x274C;</span>
			</div>
		</div>
	);
}

const mapDispatchToProps = {
	deleteUser
}


export default connect(null, mapDispatchToProps)(UserItem);
