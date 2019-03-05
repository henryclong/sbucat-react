import React, { Component } from 'react';

class ToastComponent extends Component {

	constructor(props) {
        super(props);
        this.setState({
            toasts: [],
        });
	}

	render() {
		return (
			<div className='ToastComponent'>
				{
					this.state.toasts.map((toast)=>{
						<Toast
							title={toast.title}
							text={toast.text}
							type={toast.type}
							ttl={toast.ttl}
						/>
                    })
				}
			</div>
		);
	}
}

export default ToastComponent;

export const ToastTypes = {
    TOAST_DEFAULT: 0,
    TOAST_INFO: 1,
    TOAST_ERROR: 2,
};