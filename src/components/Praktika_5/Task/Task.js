import React, { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
export default function Task(props) {
  const { text, status } = props;
  const [task, setTask] = useState({ task: text, status: status });

  const removeTask = (e) => {
    setTask({});
    console.log(e);
    //e.target.innerHTML = "";
    console.log(e.target.parentNode);
  };
  let t = task.status ? " bg-success " : " bg-warning ";
  return (
    <div className={"p2 mt-3 bg-opacity-25 " + t}>
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
