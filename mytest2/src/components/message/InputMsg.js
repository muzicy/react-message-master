import React, {Component} from 'react'

class InputMsg extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}	

	static defaultProps = {
		text: '请输入您的留言内容,shift+enter提交留言'		
	}   

	handleSubmit(e) {
       //e.preventDefault();       
       const inputMsg = document.querySelector('.input-msg');

       const msg = inputMsg.children[0].value;
       //console.log(msg)
       if(msg.length > 0) {
       	  this.props.submitMsg(msg);
       	  //this.props.hiddenTextarea();
       	  inputMsg.children[0].value = '';
       } 

	}
    
    handleSubmitMsg(e) { 
       const textarea = document.querySelector('textarea');   	
   	   if(e.keyCode == 17 && e.keyCode == 13) {
   	   	   const msg = textarea.value;
   	   	   if(msg.length > 0) {
	       	  this.props.submitMsg(msg);
	       	  //this.props.hiddenTextarea();
	       	  textarea.value = '';
	       } 
   	   }
    }
	componentWillReceiveProps() {
	   const textarea = document.querySelector('textarea');	   
       textarea.addEventListener('keyup', this.handleSubmitMsg)
	}
	
	componentWillUnmount() {
    	document.removeEventListener('keyup', this.handleSubmitMsg);
    }

	render() {
		const showTextarea = this.props.showTextarea;
		const {text} = this.props;
		return (
		   <div className='input-msg' style={{display: showTextarea==true?
		   	     'block' : 'none'}} >
               <textarea  placeholder={text}></textarea>               
               <button onClick={this.handleSubmit} className='submit-msg-btn'>发布留言</button>
           </div>
		)
	}
}

export default InputMsg