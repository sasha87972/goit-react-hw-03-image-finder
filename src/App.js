import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Searchbar from "./components/searchbar";
import SearchResult from "./components/searchResult";

class App extends Component {
  state = {
    searchQuery: "",
  };

  submitForm = (searchWord) => {
    this.setState({ searchQuery: searchWord });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.submitForm} />
        <SearchResult searchQuery={this.state.searchQuery} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default App;
