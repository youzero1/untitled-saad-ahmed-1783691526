import { useTodos } from '@/hooks/useTodos';
import AddTodoForm from '@/components/AddTodoForm';
import TodoItem from '@/components/TodoItem';

export default function TodoPage() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const remaining = todos.filter((t) => !t.completed).length;
  const total = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-blue-50 flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-500 shadow-lg mb-4">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">My Tasks</h1>
          {total > 0 && (
            <p className="mt-1 text-sm text-slate-500">
              {remaining === 0
                ? '🎉 All done!'
                : `${remaining} of ${total} task${total !== 1 ? 's' : ''} remaining`}
            </p>
          )}
        </div>

        {/* Add form */}
        <div className="mb-6">
          <AddTodoForm onAdd={addTodo} />
        </div>

        {/* Todo list */}
        {todos.length === 0 ? (
          <div className="text-center py-14">
            <div className="text-5xl mb-3">📝</div>
            <p className="text-slate-500 font-medium">No tasks yet!</p>
            <p className="text-slate-400 text-sm mt-1">Add one above to get started.</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
