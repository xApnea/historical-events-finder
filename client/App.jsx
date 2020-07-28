import React from 'react';

import EventList from './EventList.jsx'

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      pageCount: 0
    }
  }

  componentDidMount() {
    this.retrieveRecords();
  }

  retrieveRecords() {
    axios.get('/events?q=george&_page=1&_limit=10')
      .then((response) => {
        console.log(response);
        this.setState({events: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
      <div>
        <div>
          <h1>Historical Events Tracker</h1>
        </div>
        <EventList events={this.state.events}/>
      </div>
    )
  }
}

export default App;