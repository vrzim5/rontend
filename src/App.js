// App.js
import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [prazo, setPrazo] = useState("");
  const [prazoHora, setPrazoHora] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text, prazo) => {
    setIsUpdating(true);
    setText(text);
    setPrazo(prazo);
    setToDoId(_id);
  };

  const handleCompletion = (taskId) => {
    // Chamada para atualizar o status da tarefa
    updateToDo(taskId, { completo: true }, setToDo);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>PROCAST IN ACTION</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Adicione uma tarefa..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="date"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
          />
          <input
            type="time"
            value={prazoHora}
            onChange={(e) => setPrazoHora(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, prazo, prazoHora, setToDo, setText, setPrazo, setPrazoHora, setIsUpdating)
                : () => addToDo(text, prazo, prazoHora, setText, setPrazo, setPrazoHora, setToDo)
            }
          >
            {isUpdating ? "Atualizar e Concluir" : "Adicionar"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              data={item.data}
              prazo={item.prazo}
              isCompleted={item.completo} // Corrigir para usar o campo correto
              updateMode={() => updateMode(item._id, item.text, item.prazo)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
              handleCompletion={() => handleCompletion(item._id)} // Chamar a função handleCompletion corretamente
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
