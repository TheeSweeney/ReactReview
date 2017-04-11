import React, { Component } from 'react';//JSX compiles to React.create element, hence why we require React even though it is not explicitly used.

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Initial Value'}
  }

  render() {
    return ( 
      <div>
        <input 
          value = {this.state.term}
          onChange={event => this.setState({term: event.target.value})}/>
      </div>
    )
  }
};

export default Searchbar; //any component that imports Searchbar, will get the searchbar component.