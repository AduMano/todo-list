import React from "react";

export default function Task({ target, task, handle_delete }) {
  const DeleteTask = (e) => {
    e.preventDefault();
    handle_delete(target);
  };

  return (
    <div className="task">
      <h4>{task}</h4>

      <form onSubmit={DeleteTask} className="btn_delete">
        <input type="submit" value="🗑" onClick={DeleteTask} />
      </form>
    </div>
  );
}
