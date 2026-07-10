import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm border border-slate-100 group">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
        className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition
          ${todo.completed
            ? 'border-violet-500 bg-violet-500'
            : 'border-slate-300 bg-white hover:border-violet-400'
          }`}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-sm sm:text-base transition
          ${todo.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-400 transition rounded-lg p-1"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
}
