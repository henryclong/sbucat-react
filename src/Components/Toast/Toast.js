import React, { Component } from 'react';

class Toast extends Component {

	constructor(props) {
        super(props);
	}

	render() {
		return (
			<div className='Toast'>
				<h3>{this.props.title}</h3>
				<p>{this.props.text}</p>
				<button onclick={()=>{}}>x</button>
			</div>
		);
	}
}

export default Toast;