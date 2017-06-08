import React, { Component } from 'react';
// Class Based Component
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return(
      <div className="search-bar">
        <input idName="search-bar-input"
        value={this.state.term}
        onChange={ e => this.searchTerm(e.target.value) }
        onKeyPress={ e => this.searchQuery(e)}/>
      </div>
      );
  }
  searchTerm(term) {
    this.setState({term});
  }
  searchQuery(e) {
    if (e.which===13 && this.state.term) {
      this.props.onSearchTermChange(this.state.term)
    }
  }
}
export default SearchBar;