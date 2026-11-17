import { useState } from "react";

const emptyForm = {
  title: "",
  description: "",
  status: "to-do",
  priority: "low",
  deadline: "",
};

function TodoFormModal({ heading, submitLabel, initialData, onSubmit, onClose }) {
  const [form, setForm] = useState(initialData || emptyForm);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-white p-5"
      >
        <h2 className="mb-3 text-center font-bold">{heading}</h2>

        <label className="text-sm font-bold">Judul</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          className="mb-3 w-full rounded border p-1.5 text-sm"
        />

        <label className="text-sm font-bold">Deskripsi</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          className="mb-3 w-full rounded border p-1.5 text-sm"
        />

        <div className="mb-3 flex gap-3">
          <div className="flex-1">
            <label className="text-sm font-bold">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded border p-1.5 text-sm"
            >
              <option value="to-do">to-do</option>
              <option value="in progress">in progress</option>
              <option value="done">done</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="text-sm font-bold">Prioritas</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full rounded border p-1.5 text-sm"
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>

        <label className="text-sm font-bold">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          required
          className="mb-4 w-full rounded border p-1.5 text-sm"
        />

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded bg-red-600 py-1.5 text-sm text-white"
          >
            Batal
          </button>
          <button
            type="submit"
            className="flex-1 rounded bg-blue-600 py-1.5 text-sm text-white"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoFormModal;