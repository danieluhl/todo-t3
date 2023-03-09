import { api } from "~/utils/api";

export default function TodoHeader() {
  const count = (api.todos.getAll.useQuery().data || []).filter(
    (todo) => todo.completedAt == null
  ).length;

  return <h1 className="text-white">There are {count} things to do</h1>;
}
