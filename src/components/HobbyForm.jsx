import React, { useState } from 'react';

const HobbyForm = ({ addHobby }) => {
  const [hobbyName, setHobbyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hobbyName.trim()) {
      addHobby(hobbyName);
      setHobbyName('');
    }
  };

  return (
    <div className="hobby-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={hobbyName}
          onChange={(e) => setHobbyName(e.target.value)}
          placeholder="Digite um novo hobby"
        />
        <button type="submit">Adicionar Hobby</button>
      </form>
    </div>
  );
};

export default HobbyForm;
