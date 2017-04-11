import React from 'react';

const Searchbar = () => {
  return <input/> //JSX compiles to React.create element, hence why we require React even though it is not explicitly used.
};

export default Searchbar; //any component that imports Searchbar, will get the searchbar component.