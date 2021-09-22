import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
