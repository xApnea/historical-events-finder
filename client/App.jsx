import React from 'react';

import EventList from './EventList.jsx';
import SearchBar from './SearchBar.jsx';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

// body {
//   background-color: #292d3e;
//   color: #bebebe;
//   font-family: 'Bitter', serif;
// }

// const GlobalStyle = createGlobalStyle`
//   .pagination {
//     display: inline-block;
//     padding-left: 15px;
//     padding-right: 15px;
//   }
//   .pagination li {
//     display: inline-block;
//   }
// `


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      pageCount: 2,
      pageNumber: 0,
      searchTerm: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.retrieveRecords();
  }

  retrieveRecords() {
    axios.get(`/events?q=${this.state.searchTerm}&_page=${this.state.pageNumber}&_limit=10`)
      .then((response) => {
        console.log(response);
        const data = response.data;
        const count = Math.ceil(response.headers['x-total-count'] / 10)

        this.setState({
          events: data,
          pageCount: count
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePageClick(page) {
    const pageNum = page.selected + 1;
    this.setState({pageNumber: pageNum}, () => {
      this.retrieveRecords();
    });
  }

  handleSearchChange(event) {
    event.preventDefault();
    this.setState({searchTerm: event.target.value});
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    this.setState({pageNumber: 1}, () => {
      this.retrieveRecords();
    });
  }

  render() {
    return(
      <div>
        <div>
          <h1>Historical Events Tracker</h1>
        </div>

        <SearchBar
          searchTerm={this.state.searchTerm}
          handleSearchChange={this.handleSearchChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        <EventList events={this.state.events}/>

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />

      </div>
    )
  }
}

export default App;