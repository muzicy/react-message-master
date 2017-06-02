import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import reducers from '../../store/reducers/reducers.js'
import AddMsg from './AddMsg.js'
import Message from './Message.js'
import Nav from '../Mainnav.js'
import PageNumber from './Pagearea.js'
import InputMsg  from './InputMsg.js'
import {showTextarea, hiddenTextarea} from '../../store/action/toggleTextarea' 
import {addMsg, deleteMsg} from '../../store/action/addMsg.js'
import './message.css'

class MessagePage extends Component {
	constructor(props) {
    super(props);   
  } 
    
  componentWillReceiveProps() {  
    const {actions} = this.props; 
  	document.addEventListener('click',function(e) {       
      const target = e.target;          
      if(target.className!== 'input-msg'&&target.nodeName.toLowerCase() !== 'textarea' 
              && target.className !== 'submit-msg-btn' && target.className!=='add-msg') {
            actions.hiddenTextarea();
      }
      e.preventDefault();
    });
  }

  componentWillUnmount() {
     document.removeEventListener('click', false);
  }

	render() {
		const {msg, isActiveT, actions} = this.props; 
		return (

           <div className='container'>
              <Nav isActiveN={{index: 1}}/>
              <div className='message-page'>
                 <AddMsg handleAddMsg={actions.showTextarea}/>
                 <InputMsg showTextarea={isActiveT} 
                    submitMsg={actions.addMsg} hiddenTextarea={actions.hiddenTextarea}/>
                 <Message msg={msg} handleDeleteMsg={actions.deleteMsg}/>
                 <PageNumber msg={msg} />
              </div>
           </div>
		)
	}
}

const mapStateToProps = (state) => ({
    msg: state.msgApp.msg,
    isActiveT: state.toggleTextareaApp.isActiveT
})

const mapDispatchToProps = (dispatch) => ({
	actions: {
		showTextarea: bindActionCreators(showTextarea, dispatch),
		hiddenTextarea: bindActionCreators(hiddenTextarea, dispatch),
		addMsg: bindActionCreators(addMsg, dispatch),
		deleteMsg: bindActionCreators(deleteMsg, dispatch)
	}
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagePage)