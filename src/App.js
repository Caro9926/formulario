import React,{ useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';

const App = () => {
  const [inputs, setInputs] = useState({
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":"",
    "confirmPassword":""
  });

  return (
    <div className="App">
      <Formulario inputs={inputs} setInputs={setInputs}/>
    </div>
  );
}

export default App;