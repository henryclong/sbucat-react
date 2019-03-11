import React, { Component } from 'react';
import Content from './Components/Content';
import TabBar from './Components/TabBar';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current_tab: this.props.tabs[0].id,
      show_tabs: false,
    };
  }

  render() {
    return (
      <div>
        <div className={(!this.state.show_tabs) ? 'App AppHideTabs' : 'App'}>

          <div className='Header'>
            <img src='sbucat_logo.svg' alt='sbu_cat_logo' className='Logo' />
            <h1 className='Title'>SBU Cat Network</h1>
            <button
              className='MenuToggle'
              onClick={() => {
                this.setState({ show_tabs: !this.state.show_tabs });
              }}
            >
              <i class="fas fa-bars" />
            </button>
          </div>

          <TabBar
            current_tab={this.state.current_tab}
            on_change={(tab) => {
              this.setState({
                current_tab: tab.id,
                show_tabs: false,
              })
            }}
            tabs={this.props.tabs}
          />

          <Content
            current_tab={this.state.current_tab}
          />

          <div className='Footer'>
            <p>Created by Henry Long with <i className='fab fa-react' /> <i class="fab fa-sass" /> <i class="fab fa-font-awesome-flag"></i></p>
          </div>

        </div>
      </div>
    );
  }
}

App.defaultProps = {
  tabs: [
    { label: ' Home', id: 'HOME', icon: 'fas fa-home' },
    { label: ' Events', id: 'EVENTS', icon: 'fas fa-calendar-alt' },
    { label: ' Feeder Signup', id: 'FEEDER_SIGNUP', icon: 'fas fa-clipboard-list' },
    { label: ' Campus Map', id: 'CAMPUS_MAP', icon: 'fas fa-map-marked-alt' },
    { label: ' FAQ', id: 'FAQ', icon: 'fas fa-question-circle' },
  ],
  locations: [
    { label: 'Kelly', id: 'KELLY', lat: 0, lon: 0 }
  ]
}

export default App;
