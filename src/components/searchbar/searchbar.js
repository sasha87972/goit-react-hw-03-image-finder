import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SearchbarEl,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from "./searchbar.styles";
import { ReactComponent as SearchIcon } from "../icons/search.svg";
import { ReactComponent as CleanIcon } from "../icons/clean.svg";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      toast.error("Empty searchfield!!!");
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <SearchbarEl>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchIcon width="40" heiht="40" />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <SearchFormBtn
            type="button"
            onClick={() => this.setState({ searchQuery: "" })}
          >
            <CleanIcon width="40" heiht="40" />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>
        </SearchForm>
      </SearchbarEl>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
