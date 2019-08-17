import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const textRight = {
  textAlign: 'right'
};

function App() {
  return (
    <div className="">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="">
      <Row>
        <Col>
          <h3>Piyawut Chantasrisawat</h3>
         </Col>
         <Col style={textRight}>
           Test
         </Col>
      </Row>
    </header>
  );
}

export default App;
