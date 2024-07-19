import React, { useState } from 'react';

const HobbyItem = ({ hobby, deleteHobby, editHobby }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(hobby.nome);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editHobby(hobby.id, editedName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(hobby.nome);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      ) : (
        <div>
          {hobby.nome}
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => deleteHobby(hobby.id)}>Deletar</button>
        </div>
      )}
    </li>
  );
};

export default HobbyItem;
