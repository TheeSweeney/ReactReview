import React, { Component } from 'react';//JSX compiles to React.create element, hence why we require React even though it is not explicitly used.

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''}
  }

  render() {
    return ( 
      <div className='search-bar'>
        <input 
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
};

export default Searchbar; //any component that imports Searchbar, will get the searchbar component.