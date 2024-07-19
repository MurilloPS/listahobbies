Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:
 
java
Copiar código
public/
src/
  └── components/
      ├── HobbyForm.jsx
      ├── HobbyItem.jsx
      ├── HobbyList.jsx
  ├── App.css
  ├── App.js
  ├── index.css
  ├── index.js
.gitignore
package-lock.json
package.json
README.md
 
Componentes
HobbyForm.jsx
Este componente é responsável por renderizar o formulário que permite ao usuário adicionar um novo hobby. Ele contém um campo de entrada para o nome do hobby e um botão para adicionar o hobby à lista.
 
HobbyItem.jsx
Este componente representa um item individual na lista de hobbies. Ele recebe o nome do hobby como uma prop e exibe-o. Também pode conter um botão para remover o hobby da lista.
 
HobbyList.jsx
Este componente renderiza a lista completa de hobbies. Ele recebe uma lista de hobbies como uma prop e mapeia cada hobby para um componente HobbyItem.
 
App.js
O componente principal da aplicação. Ele gerencia o estado da lista de hobbies e renderiza os componentes HobbyForm e HobbyList. Ele também contém a lógica para adicionar e remover hobbies.
(https://github.com/user-attachments/assets/09a6663c-a317-41fd-9c77-2850b17d01cd)
