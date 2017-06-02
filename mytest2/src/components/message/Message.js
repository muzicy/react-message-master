import React, {Component} from 'react'

class MsgItem extends Component {
	constructor(props) {
		super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
	}
   
  handleClickDelete(i) {
    console.log(i);
    this.props.handleDeleteMsg(i);
  }
  render() {
  	const {item, uid} = this.props; 
      
  	return (
          <li>{item.text}
              <a className='delete-msg' href='javascript:void(0)'
                onClick={() => this.handleClickDelete(item.msguid)}>删除</a>
          </li>
  	)
  }
}

class MsgList extends Component {
	
	render() {
       const {msg} = this.props;       
       return (
          <ul className='msg-list'>
             <p>留言信息</p>
             {

             	msg.map((item, index) => {
             		return <MsgItem key={index} uid={index}  item={item} handleDeleteMsg={this.props.handleDeleteMsg}/>
             	})
             }          
          </ul>
       )
	}
}

export default MsgList