import React, {Component} from 'react'

class PageNumber extends Component {
	static defaultProps = {
		currentPage: 1,
		currentPageNumbers: 0,
		numbersPerPage: 20
	}

	render() {
		let {currentPage, currentPageNumbers, numbersPerPage} = this.props;
		const {msg} = this.props;
		const length = msg.length;
		currentPage = parseInt(length/numbersPerPage)+1;
		currentPageNumbers = length - 20*(currentPage-1);

		return (
           <div className='msg-page-info'>
               <p>当前页面为第<span>{currentPage}</span>页(当页共<span>{currentPageNumbers}</span>
                  条数据),限制每页加载数量为<input type='text' placeholder={numbersPerPage} />
                  <input type='button' value='OK'/></p>
           </div>
		)
	}
}

export default PageNumber