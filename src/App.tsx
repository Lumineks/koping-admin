import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-image-lightbox/style.css';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Index from './pages/index';
import Catalog from './pages/Catalog/Catalog';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container fluid>
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>

            <Route path="/catalog" exact>
              <Catalog />
            </Route>

            <Route path="/products" exact>
              <Products />
            </Route>

            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
