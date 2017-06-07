import React, { Component } from 'react';

//functional components, are functions that don't need to maintain state
// const SearchBar = ()=>{
//   return <input/>;
// };
class SearchBar extends Component {
  render() {
    return (
      <input onChange={ event=> console.log(event.target.value)} />
    )
  }
  
}

export default SearchBar;