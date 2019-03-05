import React, { Component } from 'react';
import Content from './Components/Content';
import TabBar from './Components/TabBar';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current_tab: this.props.tabs[0].id,
    };
  }

  render() {
    return (
      <div className="App">

        <div className='Header'>
          <h1>SBU Cat Network</h1>
        </div>

        <TabBar
          current_tab={this.state.current_tab}
          on_change={(tab) => {this.setState({ current_tab: tab.id })}}
          tabs={this.props.tabs}
        />

        <Content
          current_tab={this.state.current_tab}
        />

        <div className='Footer'>
          <h1>Footer</h1>
        </div>

      </div>
    );
  }
}

App.defaultProps = {
  tabs: [
    { label: ' Home', id: 'HOME', icon: 'fas fa-home' },
    { label: ' Feeder Signup', id: 'FEEDER_SIGNUP', icon: 'fas fa-clipboard-list' },
    { label: ' Campus Map', id: 'CAMPUS_MAP', icon: 'fas fa-map-marked-alt' },
    { label: ' FAQ', id: 'FAQ', icon: 'fas fa-question-circle' },
  ],
}

export default App;
