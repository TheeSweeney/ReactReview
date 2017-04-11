import React from 'react';
import ReactDOM from 'react-dom';

//create new component that will produce HTML

const App = () => {
  return <div>Hola!</div>//JSX
}

//take componenets generated HTML and place it into DOM

ReactDOM.render(<App/>, document.querySelector('.container'));//second argument is target DOM node where App will be inserted