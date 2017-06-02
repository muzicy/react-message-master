import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import './index.css'
import MainContent from './nav/Welcome/index'
import MsgPage from './nav/message/index'
import TodoPage from './nav/todo/index.js'
import reducers from './store/reducers/reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
       <Router> 
          <div>       
             <Route exact path='/' component={MainContent} />            
             <Route path='/message' component={MsgPage} /> 
             <Route path='/todo' component={TodoPage} />           
          </div>
       </Router>        
    </Provider>,
	document.getElementById('root'));
registerServiceWorker();
