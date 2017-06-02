export const ADD_MSG = 'ADD_MSG';
export const DELETE_MSG = 'DELETE_MSG'

export const addMsg = function (text) {
	return {
		type: ADD_MSG,
		text
	}
}

export const deleteMsg = function (uid) {
	return {
		type: DELETE_MSG,
		uid
	}
}