import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log('data ---> ', data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

const addToDo = (text, prazo, prazoHora, setText, setPrazo, setPrazoHora, setToDo) => {
  const prazoCompleto = `${prazo}T${prazoHora}`;
  axios
    .post(`${baseUrl}/save`, { text, prazo: prazoCompleto })
    .then((data) => {
      console.log(data);
      setText("");
      setPrazo("");
      setPrazoHora("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, prazo, prazoHora, setToDo, setText, setPrazo, setPrazoHora, setIsUpdating) => {
  const prazoCompleto = `${prazo}T${prazoHora}`;
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text, prazo: prazoCompleto })
    .then((data) => {
      console.log(data);
      setText("");
      setPrazo("");
      setPrazoHora("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateTaskCompletion = (toDoId, setToDo) => {
  axios
    .post(`${baseUrl}/complete`, { _id: toDoId })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo, updateTaskCompletion };
