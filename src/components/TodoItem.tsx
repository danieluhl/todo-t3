type Props = {
  id: string;
  checked: boolean;
  text: string;
  key: string;
  onCheckTodo: ({ checked, id }: { checked: boolean; id: string }) => void;
  onDeleteTodo: ({ id }: { id: string }) => void;
};

const TodoItem = ({ id, checked, text, onCheckTodo, onDeleteTodo }: Props) => {
  return (
    <div className="flex items-center justify-between text-white">
      <label className="cursor-pointer text-center">
        <input
          className="mr-2 h-8 w-8 cursor-pointer border-none"
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            onCheckTodo({ checked: e.target.checked, id });
          }}
        />
        {text}
      </label>
      <button onClick={() => onDeleteTodo({ id })}>❌</button>
    </div>
  );
};
export default TodoItem;
