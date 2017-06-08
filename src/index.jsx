// NPM dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// Local dependencies
import SearchBar from 'Search_bar';
import VideoList from 'Video_list';
import VideoDetail from 'Video_detail';
const API_KEY = 'AIzaSyAe_Cv32GOQhK59fk-9L-ebXanNJ_Hm6D4';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: '{dogs}'}, (videos) => {
      this.setState({ videos });
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <div className="container">
          <div className="row">
            <VideoDetail video={this.state.videos[0]} />
            <VideoList videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector('.root'));