import React, { Component } from 'react'

class InputEvents extends Component {
   constructor(props) {
   	   super(props);
   	   this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
   }

    handleSubmitTodo(e) {
    	const value = e.target.value;    	

    	if(e.keyCode === 13) {
            //console.log(this);
    		if(value.length > 0) {
                this.props.addTodo(value);
                e.target.value = '';
    	    }
    	}
        	
    }

	componentDidMount() {	
        const events = document.querySelector('.input-todo');
        events.addEventListener('keyup', this.handleSubmitTodo);
	}
    
    componentWillUnmount() {
        const events = document.querySelector('.input-todo');        
        events.removeEventListener('keyup', this.handleSubmitTodo);
    }
	render() {
		const {actions} = this.props;
		return (
            <input className='input-todo' type='text' placeholder='请输入待办事项，enter键结束' />
		)
	}
}

export default InputEvents;