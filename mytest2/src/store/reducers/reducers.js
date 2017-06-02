import { combineReducers } from 'redux'

import {ADD_TODO, DELETE_TODO} from '../action/todo.js'
import { ADD_MSG, DELETE_MSG} from '../action/addMsg.js'
import {SHOW_TEXTAREA, HIDDEN_TEXTAREA} from '../action/toggleTextarea.js'

const initialStateTodo = {
	todos: [{
		text: '高级程序编程',
		tduid: 0
	}]	
}

const initialStateMsg = {
	msg: [{
	    text: '你好，很喜欢你写的文章',
	    msguid: 0
	}]
}



function todoApp(state=initialStateTodo, action) {
	switch(action.type) {
		case ADD_TODO:  return Object.assign({}, state, {
			todos: [ 
			      {text: action.text, 
			       tduid: state.todos.reduce((maxId, m) => Math.max(m.tduid, maxId), -1) + 1}, 
			       ...state.todos]})
        case DELETE_TODO: return Object.assign({}, state, {
        	todos: state.todos.filter(todo => todo.tduid !== action.uid)
        })
        default: 
           return state;
	}
}

function msgApp(state=initialStateMsg, action) {
	switch(action.type) {
		case ADD_MSG: return Object.assign({}, state, {
			msg: [...state.msg, 
			      {text: action.text,
			       msguid: state.msg.reduce((maxId, m) => Math.max(m.msguid, maxId), -1) + 1}]
		}) 
		case DELETE_MSG: return Object.assign({}, state, {
			msg: state.msg.filter(m => m.msguid !== action.uid)
		})

		default: 
		   return state;
	}
}

/*
function App(state={}, action) {
	return {
		todo: todoApp(state.todos, action),
		msg: msgApp(state.msg, action)
	}
}
*/
const isActiveTextarea = {
	isActiveT: false
}
function toggleTextareaApp(state=isActiveTextarea, action) {
    switch(action.type) {
    	case SHOW_TEXTAREA: return Object.assign({}, state, {
    		isActiveT: true
    	})
    	case HIDDEN_TEXTAREA: return Object.assign({}, state, {
    		isActiveT:false
    	})
    	default: return state;
    }
} 

const reducer = combineReducers({
	todoApp, 
	msgApp,
	toggleTextareaApp
})

export default reducer