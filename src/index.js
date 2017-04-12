import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';

const config = require('../config');
const API_KEY = config.API_KEY

YTSearch({key: API_KEY, term: 'daft punk'}, function(data){
  console.log(data)
})
//create new component that will produce HTML

class App extends Component {
  render(){
      return (
      <div>
        <SearchBar />      
      </div>//JSX
    )
  }
}

//take componenets generated HTML and place it into DOM

ReactDOM.render(<App/>, document.querySelector('.container'));//second argument is target DOM node where App will be inserted