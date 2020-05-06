import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './main.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className="app">
            <Header />
            <Switch>
              <Route path="/info">
                <Details />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
            <Footer />
          </div>
      </Router>
    </Provider>
  );
}

export default App;
