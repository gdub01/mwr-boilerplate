import React, {Component} from 'react';
import Nav from 'app/components/Header/Nav';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
