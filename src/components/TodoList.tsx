import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { api } from "../utils/api";

const TodoList = () => {
  const utils = api.useContext();
  const todos = [];
  // get todos from trpc
  // create mutations - they have to optimistically update
  const handleAddTodo = () => {
    //things
  };
  const onCheckTodo = () => {
    //things
  };
  const onDeleteTodo = () => {
    //things
  };
  return (
    <div>
      <TodoForm onSubmit={handleAddTodo} />
      {todos.map((todo) => {
        <TodoItem
          {...todo}
          key={todo.id}
          onCheckTodo={handleCheckTodo}
          onDeleteTodo={handleDeleteTodo}
        />;
      })}
    </div>
  );
};

export default TodoList;
