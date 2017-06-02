import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import reducers from '../../store/reducers/reducers.js'
import Nav from '../Mainnav.js'
import InputEvents from './AddTodo.js'
import Todo from './Todo.js'
import {addTodo, deleteTodo} from '../../store/action/todo.js'
import './todo.css'

class TodoPage extends Component {	

	render() {
		const {todos, actions} = this.props;		
		return (
           <div className='container'>
              <Nav isActiveN={{ index: 2}}/>
              <InputEvents addTodo={actions.addTodo} />
              <Todo deleteTodo={actions.deleteTodo} todos={todos} />
           </div>
		)
	}
}

const mapStateToProps = (state) => ({
    todos: state.todoApp.todos
  
})

const mapDispatchToProps = (dispatch) => ({
	actions: {		
		addTodo: bindActionCreators(addTodo, dispatch),
		deleteTodo: bindActionCreators(deleteTodo, dispatch)
	}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPage)