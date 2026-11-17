import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { dummyTodos } from "./data/dummyTodos";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";

function App() {
  const [todos, setTodos] = useState(dummyTodos);

  const handleAddTodo = (newTodo) => {
    const newId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    setTodos([...todos, { ...newTodo, id: newId }]);
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleDeleteTodo = (idToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Routes>
        <Route
          path="/"
          element={
            <TodoList
              todos={todos}
              onAdd={handleAddTodo}
              onDelete={handleDeleteTodo}
            />
          }
        />
        <Route
          path="/todo/:id"
          element={<TodoDetail todos={todos} onUpdate={handleUpdateTodo} />}
        />
      </Routes>
    </div>
  );
}

export default App;