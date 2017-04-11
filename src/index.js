import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

const config = require('../config');


//create new component that will produce HTML

const App = () => {
  return (
    <div>
      <SearchBar />      
    </div>//JSX
  )
}

//take componenets generated HTML and place it into DOM

ReactDOM.render(<App/>, document.querySelector('.container'));//second argument is target DOM node where App will be inserted