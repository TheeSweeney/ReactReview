import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList'
import VideoDetail from './components/videoDetail'

const config = require('../config');
const API_KEY = config.API_KEY


//create new component that will produce HTML

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'braille skateboarding'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render(){
      return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />      
      </div>//JSX
    )
  }
}

//take componenets generated HTML and place it into DOM

ReactDOM.render(<App/>, document.querySelector('.container'));//second argument is target DOM node where App will be inserted