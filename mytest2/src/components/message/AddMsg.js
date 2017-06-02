import React, {Component} from 'react'

class AddMsg extends Component {
	constructor(props) {
		super(props);
		this.addMsg = this.addMsg.bind(this);
	}

	addMsg() {
       this.props.handleAddMsg(); 
	}

	render() {
		return (
           <a href="javascript:void(0)" className='add-msg' onClick={this.addMsg}> 添加消息<span>+</span> </a>
		)
	}
}

export default AddMsg