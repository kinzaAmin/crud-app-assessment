import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
	getUsers,
	deleteUser,
	addUser,
	updateUser,
} from "../../redux/Actions/action";
import ReusableButton from "../ReuseableButton/ReuseableButton";

const UserTable = ({ users, getUsers, deleteUser, addUser, updateUser }) => {
	const [newUser, setNewUser] = useState({
		name: "",
		email: "",
		username: "",
	});
	const [editUser, setEditUser] = useState(null);

	useEffect(() => {
		getUsers();
	}, [getUsers]);

	const handleDelete = (id) => {
		deleteUser(id);
	};

	const handleChange = (e) => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		});
	};

	const handleEdit = (user) => {
		setEditUser(user);
		setNewUser(user);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (editUser) {
			updateUser(newUser);
			setEditUser(null);
		} else {
			addUser(newUser);
		}
		setNewUser({
			name: "",
			email: "",
			username: "",
		});
	};

	const editButtonStyle = {
		backgroundColor: "yellow",
		padding: "7px",
		borderRadius: "5px",
		border: "none",
		cursor: "pointer",
	};
	const deleteButtonStyle = {
		backgroundColor: "red",
		padding: "7px",
		borderRadius: "5px",
		border: "none",
		marginLeft: "8px",
		cursor: "pointer",
	};

	return (
		<div className='user-table'>
			<h2 style={{ textAlign: "center" }}>User Table</h2>
			<form onSubmit={handleSubmit} className='user-form'>
				<input
					type='text'
					name='name'
					value={newUser.name}
					onChange={handleChange}
					placeholder='Name'
				/>
				<input
					type='email'
					name='email'
					value={newUser.email}
					onChange={handleChange}
					placeholder='Email'
				/>

				<button type='submit' className='add-user-btn'>
					{editUser ? "Update" : "Add"} User
				</button>
			</form>
			{users.length === 0 ? (
				<p style={{ textAlign: "center" }}>No users found.</p>
			) : (
				<table style={{ margin: "0 auto" }}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								{/*===========> using Reuseable Buttons===============> */}
								<td className='reuseable-btns'>
									<ReusableButton
										title='Edit'
										onClick={() => handleEdit(user)}
										style={editButtonStyle}
									/>
									<ReusableButton
										title='Delete'
										onClick={() => handleDelete(user.id)}
										style={deleteButtonStyle}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		users: state.users.users,
	};
};

export default connect(mapStateToProps, {
	getUsers,
	deleteUser,
	addUser,
	updateUser,
})(UserTable);
