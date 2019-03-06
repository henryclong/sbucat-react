import React, { Component } from 'react';
import signup from './site_content/signup.json';

class SignUpTab extends Component {
    render() {
      return (
        <div className='SignUpTab'>
          <h1>{signup.title}</h1>
          <hr/>
          <p>{signup.description}</p>
          <a href={signup.url_address} >{signup.url_label}</a>
        </div>
      );
    }
}

export default SignUpTab;