import Mainnav from '../Mainnav.js'
import Welcome from './Welcome.js'
import './welcome.css'

import React, {Component} from 'react'

class HomePage extends Component {
	
	render() {
		return (
	       <div className='container'>
	           <Mainnav  isActiveN={{ index: 0}}/>
	           <Welcome />
	       </div>
		)
	}
}	


export default HomePage