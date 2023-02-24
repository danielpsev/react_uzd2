import React, { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
export default function Task(props) {
  const { text, status } = props;
  const [task, setTask] = useState({ task: text, status: status });

  const removeTask = (e) => {
   e.target.parentNode.remove();
   setTask({});
  };
  let div_status_class = task.status ? " bg-success " : " bg-warning ";
  return (
    <div className={"p2 mt-3 bg-opacity-25 " + div_status_class}>
      {task.status ? <FaRegCheckCircle /> : <FaRegCircle />}
      {task.task}
      <button
        className="btn btn-primary"
        onClick={() => setTask({ ...task, status: true })}
      >
        {task.status ? "Done" : "Check"}
      </button>
      <button
        className="mx-2 btn btn-danger"
        onClick={(event) => removeTask(event)}
      >
        Delete
      </button>
    </div>
  );
}
