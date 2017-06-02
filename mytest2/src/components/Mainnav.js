import React, {Component} from 'react'
import {Logo, List} from './Navigator.js'
import Login from './Login.js'
import './Navigator.css'

class MainNav extends Component {
	render() {
		const {isActiveN} = this.props;
		return (
            <div className='main-nav'>
               <Logo />
               <List keyIndex={isActiveN.index}/>
               <Login />
            </div>
		)
	}
}

export default MainNav