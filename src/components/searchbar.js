import React, { Component } from 'react';//JSX compiles to React.create element, hence why we require React even though it is not explicitly used.

class Searchbar extends Component {
  render() {
    return <input />
  }
};

export default Searchbar; //any component that imports Searchbar, will get the searchbar component.