import React from 'react';
import HobbyItem from './HobbyItem';

const HobbyList = ({ hobbies, deleteHobby, editHobby }) => {
  return (
    <div className="hobby-list">
      <h2>Meus Hobbies</h2>
      <ul>
        {hobbies.map(hobby => (
          <HobbyItem
            key={hobby.id}
            hobby={hobby}
            deleteHobby={deleteHobby}
            editHobby={editHobby}
          />
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
