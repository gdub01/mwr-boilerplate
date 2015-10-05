import React, {Component} from 'react';
import Nav from '../components/Header/Nav';
import reactMixin from 'react-mixin';

@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
  getMeteorData() {
    return {
      user: Meteor.user()
    };
  }

  render() {

    return (
      <div className="App">
        <Nav user={this.data.user} />
        {this.props.children}
      </div>
    );
  }
}
