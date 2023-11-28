import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../Form/form';
import Table from '../Table/Table';


function App() {

  return (
    <div>
      <h1>Redux Airport</h1>
      <Form />
      <Table />
      
    </div>
  );
}

export default App;
