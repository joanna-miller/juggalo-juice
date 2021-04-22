import React from 'react';
import Header from './Header.js';
import ItemControl from './ItemControl.js';
import { MDBContainer, MDBCol } from 'mdbreact';
import './../styles/App.css';

function App() {
  return (
    <>
      <div style={{backgroundColor: 'yellow'}}>
        <Header/>
        <MDBContainer>
          <MDBCol><ItemControl /></MDBCol>
        </MDBContainer>
      </div>
    </>
  );
}

export default App;
