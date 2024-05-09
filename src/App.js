import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>TO-DO App</h1>

        <div className="top">
          <input type="text" placeholder="Adicione uma tarefa..." />

          <div className="add">Adicionar</div>
        </div>

        <div className="list">
          <ToDo text="Hi" />
        </div>
      </div>
    </div>
  );
}

export default App;
