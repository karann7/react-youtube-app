// NPM dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Local dependencies
import SearchBar from 'Search_bar';
import VideoList from 'Video_list';
const API_KEY = 'AIzaSyAe_Cv32GOQhK59fk-9L-ebXanNJ_Hm6D4';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector('.root'));