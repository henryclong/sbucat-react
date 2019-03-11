import React, { Component } from 'react';
import HomeTab from './Tabs/HomeTab';
import EventTab from './Tabs/EventTab';
import SignUpTab from './Tabs/SignUpTab';
import FAQTab from './Tabs/FAQTab';
import MapTab from './Tabs/MapTab';

class Content extends Component {

	render() {
		return (
			<div className='Content'>
				{
					(this.props.current_tab === 'HOME')?
						<HomeTab/>
					:(this.props.current_tab === 'EVENTS')?
						<EventTab show_event={this.props.show_event} hide_event={this.props.hide_event}/>
					:(this.props.current_tab === 'FEEDER_SIGNUP')?
						<SignUpTab/>
					:(this.props.current_tab === 'CAMPUS_MAP')?
						<MapTab/>
					:(this.props.current_tab === 'FAQ')?
						<FAQTab/>
					:<h1>TAB_ERROR</h1>
				}
			</div>
		);
	}
}

export default Content;
