import React from 'react';
import Header from './Header.js';
import ItemList from './ItemList.js';
import { MDBContainer, MDBCol } from 'mdbreact';

function App() {
  return (
    <>
      <Header />
      <MDBContainer>
        <MDBCol><ItemList /></MDBCol>
      </MDBContainer>
    </>
  );
}

export default App;
