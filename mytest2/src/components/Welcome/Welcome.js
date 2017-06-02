import React, {Component} from 'react' 

class NavList extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		lists: [
			{text: '前往留言板>', href: '/message'},
			{text: '前往待办事项>', href: '/todo'}
		]
	}

	render() {
		const {lists} = this.props
		return (
           <ul className='wel-nav'>
              {lists.map((item, index) => (
                   <li key={index}><a href={item.href}> {item.text} </a> </li>
               ))}
           </ul>
		)
	}
}

class Welcome extends Component {
    render() {
    	return (
            <div className='welcome'>
	           <h1>欢迎使用</h1>
	           <h2>React Demo</h2>
	           <NavList />
	    	</div>
    	)    	
    }
}

export default Welcome