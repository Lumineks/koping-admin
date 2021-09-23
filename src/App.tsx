import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header />
      </Container>
    </div>
  );
}

export default App;
