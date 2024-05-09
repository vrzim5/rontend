import axios from "axios";

const baseURL = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(`${baseURL}`).then(({ data }) => {
    console.log("data --->", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${baseURL}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setToDo);
  });
};

export { getAllToDo, addToDo };
