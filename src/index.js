import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'

const config = require('../config');
const API_KEY = config.API_KEY

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videosSearch('braille skateboarding');
  }

  videosSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render(){
      return (
      <div>
        <SearchBar onSearchTermChange={term => this.videosSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />      
      </div>//JSX
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));//second argument is target DOM node where App will be inserted