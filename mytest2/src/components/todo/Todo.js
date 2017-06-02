import React, {Component} from 'react'
import Nav from '../Mainnav.js'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(uid) {
     this.props.deleteTodo(uid);
  }

	render() {
		const {item} = this.props;
		return (
           <li>{item.text} 
              <a href='javascript:void(0)' className='delete-todo' 
                  onClick={() => this.deleteTodo(item.tduid)}> 删除 </a>
           </li>
		)
	}
}

class TodoList  extends Component {    

    render() {
    	const {todos, deleteTodo} = this.props;     
    	return (
           <ul className='todo-list'>
              {
                 todos.map((todo, index) => (
                     <TodoItem key={index} item={todo} deleteTodo={deleteTodo} />
                  ))

              }
           </ul>
    	)
    }
}

export default TodoList