import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>TO-DO App</h1>

        <div className="top">
          <input type="text" placeholder="Adicione uma tarefa..." />

          <div className="add">Adicionar</div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <ToDo key={item.id} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
