import { useState } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [value, setValue] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task…"
        className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 shadow-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="rounded-xl bg-violet-500 px-5 py-3 text-white font-semibold shadow-sm hover:bg-violet-600 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Add
      </button>
    </form>
  );
}
