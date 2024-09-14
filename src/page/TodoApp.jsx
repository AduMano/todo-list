import React from "react";
import { useState } from "react";
import "./../styles/Style.css";
import "./../styles/TodoApp.css";
import InputFormComp from "./../components/InputForm";
import TaskComp from "./../components/Task";

const TodoApp = () => {
  // States
  const [tasks, setTasks] = useState([]);

  // Functions
  const DeleteList = (index) => {
    setTasks((prev_tasks) => {
      const new_tasks = [...prev_tasks];
      new_tasks.splice(index, 1);
      return new_tasks;
    });
  };

  const AddList = (task) => {
    setTasks((prev_tasks) => {
      const new_tasks = [...prev_tasks];
      new_tasks.push(task);
      return new_tasks;
    });
  };

  return (
    <>
      <div className="wrapper">
        <h1 className="heading">Todo App</h1>

        <InputFormComp handle_add_list={AddList} />

        <hr />

        {tasks.length === 0 ? (
          <h2>No Tasks.</h2>
        ) : (
          <div className="tasks_container">
            {tasks.map((item, index) => (
              <TaskComp
                key={index}
                target={index}
                task={item}
                handle_delete={DeleteList}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TodoApp;
