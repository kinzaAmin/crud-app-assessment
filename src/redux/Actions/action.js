// actions/userActions.js
import axios from "axios";
import {
	GET_USERS,
	DELETE_USER,
	ADD_USER,
	UPDATE_USER,
} from "../Actions/actionTypes/actionTypes"; // Update import

export const getUsersSuccess = (users) => {
	return {
		type: GET_USERS,
		payload: users,
	};
};

export const getUsers = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				"https://jsonplaceholder.typicode.com/users",
			);
			dispatch(getUsersSuccess(response.data));
		} catch (error) {
			console.error("Error fetching users: ", error);
		}
	};
};

export const deleteUserSuccess = (userId) => {
	return {
		type: DELETE_USER,
		payload: userId,
	};
};

export const deleteUser = (userId) => {
	return async (dispatch) => {
		try {
			await axios.delete(
				`https://jsonplaceholder.typicode.com/users/${userId}`,
			);
			dispatch(deleteUserSuccess(userId));
		} catch (error) {
			console.error("Error deleting user: ", error);
		}
	};
};

export const addUserSuccess = (user) => {
	return {
		type: ADD_USER,
		payload: user,
	};
};

export const addUser = (user) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				"https://jsonplaceholder.typicode.com/users",
				user,
			);
			dispatch(addUserSuccess(response.data));
		} catch (error) {
			console.error("Error adding user: ", error);
		}
	};
};

export const updateUserSuccess = (user) => {
	// Add this function
	return {
		type: UPDATE_USER,
		payload: user,
	};
};

export const updateUser = (user) => {
	// Add this function
	return async (dispatch) => {
		try {
			const response = await axios.put(
				`https://jsonplaceholder.typicode.com/users/${user.id}`,
				user,
			);
			dispatch(updateUserSuccess(response.data));
		} catch (error) {
			console.error("Error updating user: ", error);
		}
	};
};
