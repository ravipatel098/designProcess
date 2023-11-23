import React from 'react';
import './App.css';
import MultipageForms from './Component/MultipageForm.web';
import ApiData from './Component/ApiData.web';
import CrudData from './Component/CrudData';

function App() {
  return (
    <div className="App">
      {/* <MultipageForms navigation={undefined} id={''} /> */}
      <ApiData navigation={undefined} id={''} />
      {/* <CrudData navigation={undefined} id={''} /> */}
    </div>
  );
}

export default App;
