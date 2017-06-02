import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Logo extends Component {
	render() {
		return (
           <span className='logo'>React Demo</span>
		)
	}
}

class ListItem extends Component {
	constructor(props) {
		super(props);

		this.clickNavBtn = this.clickNavBtn.bind(this);
		this.state = {
			isActiveClass: false
		};
	}

	clickNavBtn() {
		this.setState({
			isActiveClass: true
		})
	}

	componentDidMount() {
		const isActive = this.props.keyIndex;
		if(isActive) {

		}
	}

	render() {
		const {item, keyIndex} = this.props;
		const {isActiveClass} = this.state;
		
		const style = {
        	className: keyIndex === true? 'nav-active' : ''
        }
		return (
           <li className={style.className}> <Link onClick={this.clickNavBtn} to={item.href}>{item.text}</Link></li>
		)
	}
}

class List extends Component {
	constructor(props) {
		super(props);
	} 

	static defaultProps = {
		lists: [
            {text: '欢迎页', href:'/'},
            {text: '留言板', href:'/message'},
            {text: '待办事项(新功能)', href:'/todo'}
		]
	}
    
    render() {
    	const {lists} = this.props;    	
        const {keyIndex} = this.props;

    	return (    	  
    	  <ul className='nav-list'>
           {
           	   lists.map((item, index) => (
           	      <ListItem key={index} item={item} keyIndex={index===keyIndex}/>  
               ))
           } 
          </ul>
    	)
    }    
}

export {Logo, List}
