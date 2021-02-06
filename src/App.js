import './App.css';
import React,{Component} from 'react';
import Home from './components/Home';
import Background from './components/Background';
import Text from './components/Text';
import View from './components/View';
import Navbar from './components/Nav';
import {BrowserRouter, Switch, Route} from 'react-router-dom';




class App extends Component {
  render(){

  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Background">
          <Background />
        </Route>
        <Route path="/Text">
          <Text />
        </Route>
        <Route path="/View">
          <View />
        </Route>

      </Switch>    
    </div>
  </BrowserRouter>

  );
  }
}

export default App;
