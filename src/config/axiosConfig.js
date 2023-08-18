import axios from "axios";

export const ToDoTask = axios.create({
  baseURL: "http://localhost:5000/",
});
