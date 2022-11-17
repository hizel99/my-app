import EjemploUno from './components/EjemploUno';
import  react, { useState } from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';

function App() {
 /*  const sujeto= {
    nombre:'Juanito',
    texto:'lorem ipsun lol maria kola',
    urlImagen:'https://via.placeholder.com/64'
  } */
  const usersData=([
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ])
  //State
  const [users, setusers]= useState(usersData);
  //Agregar nuevo usuario
  const addUser= (user)=>
  {
    users.id=uuidv4()
    setusers([
      ...users,
      user
    ])

  }
  return (
    <div className="container">
    <h1>CRUD App with Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
        <h2>Add user</h2>
        <AddUserForm/>
      </div>
      <div className="flex-large">
        <h2>View users</h2>
        <UserTable users={users}/>
      </div>
    </div>
  </div>
  );
}

export default App;
