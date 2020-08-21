import React from 'react';

import Home from './components/Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Form from './components/Form';
import Details from './components/Details';

function App() {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Yash's Code Camp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/new">New</a>
            </li>
          </ul>

        </div>
      </nav>

      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={Form} />
            <Route exact path="/detail/:id" component={Details} />

          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
