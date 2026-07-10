---
status: implemented
title: Basic Todo App
---

1. Create the global stylesheet at /app/src/styles/global.css with `@import "tailwindcss";` as the first line, plus any base body styles.

2. Create the app entry point at /app/src/main.tsx that imports the global stylesheet and mounts the root React component.

3. Create a shared TypeScript type for a Todo item at /app/src/types/todo.ts with fields: id (string), text (string), completed (boolean).

4. Create a custom hook at /app/src/hooks/useTodos.ts that manages todo state using useState and localStorage persistence. It should expose: todos array, addTodo, toggleTodo, and deleteTodo functions.

5. Create a reusable TodoItem component at /app/src/components/TodoItem.tsx that displays a single todo with a checkbox to toggle completion and a delete button. Completed todos should show strikethrough text.

6. Create a reusable AddTodoForm component at /app/src/components/AddTodoForm.tsx with a controlled text input and a submit button. On submit it calls addTodo and clears the input. Pressing Enter should also submit.

7. Create the main page component at /app/src/pages/TodoPage.tsx that uses the useTodos hook, renders AddTodoForm at the top, shows a count summary (e.g. "3 of 5 remaining"), and maps over the todos array to render TodoItem components. Show a friendly empty state message when there are no todos.

8. Update /app/src/App.tsx to render the TodoPage component as the sole route/view.

9. Update /app/vite.config.ts (or create it) to include the @tailwindcss/vite plugin and the @/ path alias pointing to /app/src/.

10. Update /app/index.html to include the app title "Todo App" and ensure the root div and main.tsx script tag are present.
