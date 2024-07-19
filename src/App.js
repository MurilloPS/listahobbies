import React, { useState } from 'react';
import HobbyForm from './components/HobbyForm';
import HobbyList from './components/HobbyList';
import './App.css';

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addHobby = (hobbyName) => {
    const newHobby = { id: nextId, nome: hobbyName };
    setHobbies([...hobbies, newHobby]);
    setNextId(nextId + 1);
  };

  const deleteHobby = (id) => {
    const updatedHobbies = hobbies.filter(hobby => hobby.id !== id);
    setHobbies(updatedHobbies);
  };

  const editHobby = (id, newName) => {
    const updatedHobbies = hobbies.map(hobby => {
      if (hobby.id === id) {
        return { ...hobby, nome: newName };
      }
      return hobby;
    });
    setHobbies(updatedHobbies);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista para hobbies</h1>
        <HobbyForm addHobby={addHobby} />
        <HobbyList hobbies={hobbies} deleteHobby={deleteHobby} editHobby={editHobby} />
      </header>
    </div>
  );
}

export default App;
