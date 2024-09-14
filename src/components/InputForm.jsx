import React from "react";
import { useState } from "react";

export default function InputForm({ handle_add_list }) {
  const [task, setTask] = useState("");
  const AddList = (e) => {
    e.preventDefault();

    if (task.length > 0) {
      handle_add_list(task);
      setTask("");
    }
  };

  return (
    <>
      <form onSubmit={AddList}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}
