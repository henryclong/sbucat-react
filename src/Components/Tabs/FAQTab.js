import React, { Component } from 'react';
import faq from './site_content/faq.json';

class FAQTab extends Component {

  constructor(props) {
    super(props);
    console.log(faq);
  }

  render() {
    return (
      <div>
        <h1>FAQ</h1>
        <hr />
        {
          faq.faq_list.map((item) => (
            <div>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default FAQTab;