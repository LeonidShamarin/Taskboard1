import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
//*className='container', "input-filed" - це клас з матеріалайз

function App() {
  // const todotask = [{ id: 0, title: "Clean", status: false }];
  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem("tasks");
    if (!storedTodos) {
      return [];
    } else {
      return JSON.parse(storedTodos);
    }
  });
  const [taskTitle, setTasksTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    const storedTodos = JSON.parse(localStorage.getItem("tasks"));
    if (e.key === "Enter" && e.target.value !== "") {
      setTasks([
        //...tasks - було
        ...storedTodos,
        {
          id: uuidv4(),
          title: taskTitle,
          status: false,
        },
      ]);
      setTasksTitle("");
    }
  };

  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div className="container">
      <h1>Note your tasks</h1>
      <span>{month + " " + day + ", " + year}</span>
      <div className="input-filed">
        <input
          type="text"
          value={taskTitle}
          onChange={(event) => setTasksTitle(event.target.value)}
          onKeyDown={addTask}
        />
        <label>Write your task name and press ENTER</label>
      </div>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
