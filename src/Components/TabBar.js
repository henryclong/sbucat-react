import React, { Component } from 'react';

class TabBar extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='TabBar'>
				{
					this.props.tabs.map((tab)=>(
						<button
							key={'Tab_'+tab.id}
							className='Tab'
							onClick={()=>this.props.on_change(tab)}
						>
							<span className='TabFill'>
								<i className={tab.icon}/>
							</span>
							{tab.label}
						</button>
					))
				}
            </div>
		);
	}
}

export default TabBar;
