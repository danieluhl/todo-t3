import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { api } from "../utils/api";

const TodoList = () => {
  const utils = api.useContext();
  const todos = (api.todos.getAll.useQuery().data || []).sort((a, b) => {
    if (a.completedAt && b.completedAt) {
      return a.completedAt.getTime() - b.completedAt.getTime();
    }
    if (a.completedAt) {
      return 1;
    } else if (b.completedAt) {
      return -1;
    }
    return b.createdAt.getTime() - a.createdAt.getTime();
  });
  const mutationObj = {
    onMutate: async () => {
      await utils.todos.getAll.cancel();
    },
    onSettled: async () => {
      await utils.todos.getAll.invalidate();
    },
  };
  const addTodo = api.todos.addTodo.useMutation(mutationObj);
  const checkTodo = api.todos.checkTodo.useMutation({
    onMutate: async ({ checked, id }) => {
      await utils.todos.getAll.cancel();
      utils.todos.getAll.setData(undefined, (prevTodos) => {
        if (prevTodos) {
          const toUpdate = prevTodos.find((todo) => todo.id === id);
          if (toUpdate) {
            toUpdate.checked = checked;
          }
          return [...prevTodos];
        } else {
          return [];
        }
      });
    },
    onSettled: async () => {
      await utils.todos.getAll.invalidate();
    },
  });

  const deleteTodo = api.todos.deleteTodo.useMutation(mutationObj);
  return (
    <div>
      <TodoForm onSubmit={addTodo.mutate} />
      {todos.map((todo) => {
        return (
          <TodoItem
            checked={todo.checked}
            text={todo.text}
            key={todo.id}
            id={todo.id}
            onCheckTodo={checkTodo.mutate}
            onDeleteTodo={deleteTodo.mutate}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
