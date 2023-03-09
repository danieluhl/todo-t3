import { FormEvent, useState } from "react";

const TodoForm = ({
  onSubmit,
}: {
  onSubmit: ({ text }: { text: string }) => void;
}) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ text });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="my-2 rounded-md px-4 py-2"
        type="text"
        placeholder="Enter Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};
export default TodoForm;
