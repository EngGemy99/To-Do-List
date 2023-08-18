import axios from "axios";

export const ToDoTask = axios.create({
  // baseURL: "http://localhost:5000/",  //local
  baseURL: "https://to-do-list-azzl.onrender.com/",
});
