import { useState } from "react";
import { Link } from "react-router-dom";
import TodoFormModal from "./TodoFormModal";

function TodoList({ todos, onAdd, onDelete }) {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleDeleteClick = (todo) => {
    const isConfirmed = window.confirm(
      `Yakin mau menghapus tugas "${todo.title}"?`
    );
    if (isConfirmed) {
      onDelete(todo.id);
    }
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        >
          Tambah Todo
        </button>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-2">Judul</th>
            <th>Status</th>
            <th>Prioritas</th>
            <th>Deadline</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="border-b">
              <td className="py-3">{todo.title}</td>
              <td>{todo.status}</td>
              <td>{todo.priority}</td>
              <td>{todo.deadline}</td>
              <td>
                <Link
                  to={`/todo/${todo.id}`}
                  className="mr-1 rounded bg-blue-600 px-2 py-1 text-white"
                >
                  Lihat
                </Link>
                <button
                  onClick={() => handleDeleteClick(todo)}
                  className="rounded bg-red-600 px-2 py-1 text-white"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModal && (
        <TodoFormModal
          heading="Tambah Todo"
          submitLabel="Tambah"
          onSubmit={(data) => {
            onAdd(data);
            setShowAddModal(false);
          }}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}

export default TodoList;