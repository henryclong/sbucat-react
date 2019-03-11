import React, { Component } from 'react';
import events from './site_content/events.json';

class EventTab extends Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <hr/>
        {
          events.semester_list.map((semester) => (
            <div>
              <h2>{semester.semester}</h2>
              <div className='EventsList'>
                {semester.event_list.map((item) => (
                  <div className='Event'>
                    <h2 className='title'>{item.date.day + '-' + item.date.day}</h2>
                    <h2 className='date'>{item.title}</h2>
                    <p className='desc'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        }

      </div>
    );
  }
}

export default EventTab;