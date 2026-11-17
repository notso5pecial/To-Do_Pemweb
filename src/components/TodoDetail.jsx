import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoFormModal from "./TodoFormModal";

function TodoDetail({ todos, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const todo = todos.find((item) => item.id === Number(id));

  if (!todo) {
    return <p>Tugas tidak ditemukan.</p>;
  }

  return (
    <div className="mx-auto mt-16 max-w-xl rounded-lg border p-6">
      <div className="mb-3">
        <h2 className="font-bold">Judul</h2>
        <p className="text-sm">{todo.title}</p>
      </div>
      <div className="mb-3">
        <h2 className="font-bold">Deskripsi</h2>
        <p className="text-sm">{todo.description}</p>
      </div>
      <div className="mb-3">
        <h2 className="font-bold">Status</h2>
        <p className="text-sm">{todo.status}</p>
      </div>
      <div className="mb-3">
        <h2 className="font-bold">Prioritas</h2>
        <p className="text-sm">{todo.priority}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">Deadline</h2>
        <p className="text-sm">{todo.deadline}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => navigate("/")}
          className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
        >
          Kembali
        </button>
        <button
          onClick={() => setShowUpdateModal(true)}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        >
          Update
        </button>
      </div>

      {showUpdateModal && (
        <TodoFormModal
          heading="Update Todo"
          submitLabel="Update"
          initialData={todo}
          onSubmit={(data) => {
            onUpdate({ ...data, id: todo.id });
            setShowUpdateModal(false);
          }}
          onClose={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  );
}

export default TodoDetail;