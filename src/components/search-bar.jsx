import React, { Component } from 'react';

//functional components, are functions that don't need to maintain state
// const SearchBar = ()=>{
//   return <input/>;
// };
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }; 
  }
  render() {
    return (
      <div>
      <input 
        value={this.state.term}
        onChange={ event=> this.setState({term: event.target.value})} />
      <br/>
      Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;