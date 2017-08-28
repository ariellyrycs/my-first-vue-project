import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Switch, Route} from 'react-router-dom';
import Hello from './components/hello.js';
import Menu from './components/menu.js';


class App extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return <Switch>
      <Route exact path="/" component={Menu} />
      <Route path="/hello" component={Hello} />
    </Switch>
  }
}

export default App;
