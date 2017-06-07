import React from 'react';
import ReactDOM from 'react-dom';
const API_KEY = 'AIzaSyAe_Cv32GOQhK59fk-9L-ebXanNJ_Hm6D4';
import SearchBar from './components/search-bar';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
  
}

ReactDOM.render(<App/>, document.querySelector('.container'));