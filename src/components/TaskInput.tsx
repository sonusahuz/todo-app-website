import { useState } from "react";
import TaskList from "./TaskList";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { RootState } from "../store/store";
import Button from "./Button";

const TaskInput = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [taskInput, setTaskInput] = useState<string>("");

  const handleTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskInput.trim() === "") {
      alert("Please enter valid task");
    } else {
      dispatch(addTodo(taskInput));
      setTaskInput("");
    }
  };

  return (
    <div>
      <Card>
        <form
          onSubmit={handleTask}
          className="gap-4 rounded flex items-center justify-between p-2"
        >
          <input
            type="text"
            onChange={(e) => setTaskInput(e.target.value)}
            value={taskInput}
            className="px-2 py-3 border-2 bg-white rounded-lg w-full"
            placeholder="Enter task..."
          />
          <Button type="submit" className="py-3.5 w-40">
            Add Task
          </Button>
        </form>
      </Card>
      <div>
        <TaskList todos={todos} />
      </div>
    </div>
  );
};

export default TaskInput;
