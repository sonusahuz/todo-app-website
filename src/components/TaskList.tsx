import { useState } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../store/todoSlice";
import { Todo } from "../utils";
import Button from "./Button";

const TaskList = ({ todos }: { todos: Todo[] }) => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTask = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleUpdateTask = (id: number) => {
    if (editText.trim() !== "") {
      dispatch(updateTodo({ id, text: editText }));
      setEditingId(null);
      setEditText("");
    }
  };

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  return (
    <div className="mx-auto w-auto">
      <div>
        {todos.length > 0 ? (
          <div>
            {todos.map((todo) => (
              <Card key={todo.id}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleTask(todo.id)}
                    />
                    {editingId === todo.id ? (
                      <input
                        type="text"
                        className="px-2 py-2 border-2 bg-white rounded-lg w-auto"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                    ) : (
                      <p
                        className={`${
                          todo.completed ? "line-through text-red-600" : ""
                        } text-black text-xl truncate`}
                      >
                        {todo.text}
                      </p>
                    )}
                  </div>
                  <div className="space-x-3">
                    {editingId === todo.id ? (
                      <Button
                        className="px-2 py-3 rounded w-16"
                        onClick={() => handleUpdateTask(todo.id)}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        className="px-2 py-3 rounded w-16"
                        onClick={() => handleEdit(todo.id, todo.text)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      onClick={() => handleDeleteTask(todo.id)}
                      className="px-2 py-3 rounded w-16 bg-red-700"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <Card>No Tasks</Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
