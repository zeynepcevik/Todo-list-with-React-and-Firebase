import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(todo, newTitle);
  };

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          style={{ textDecoration: todo.completed && "line-through" }}
          type="text"
          value={newTitle}
          className="list"
          onChange={handleChange}
        />
      </form>
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" style={{ color: todo.completed ? "green" : "black" }} />
        </button>
        <button className="button-edit" onClick={handleSubmit}>
          <EditIcon id="i" style={{ color: "blue" }} />
        </button>
        <button
          className="button-delete"
          onClick={() => handleDelete(todo.id)}
        >
          <DeleteIcon id="i" style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
}
