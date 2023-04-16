import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, async (querySnapshot) => {
      let newTodos = [];
      querySnapshot.forEach((doc) => {
        newTodos.push({ ...doc.data(), id: doc.id });
      });
      setTodos(newTodos);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const handleChange = async (e, todo) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
      await updateDoc(doc(db, "todos", todo.id), { title: e.target.value });
    }
  };

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
