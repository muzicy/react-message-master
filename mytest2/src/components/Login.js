import React, {Component} from 'react'

class Login extends Component {
	static defaultProps = {
		placeholder: '请输入您的用户名'
	}
	render() {
		const {placeholder} = this.props;
		return (
           <div className='login'>
              <input type='text' placeholder={placeholder} />
              <button>登录</button>
           </div>
		)
	}
}

export default Login