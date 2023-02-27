import React, { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
export default function Task(props) {

  const { text, status } = props;
  const [task, setTask] = useState({ task: text, status: status });


  const completeTask = () => {
    setTask({ ...task, status: true })
  }
  const removeTask = (e) => {
   //e.target.parentNode.remove();
   setTask({});
   e.target.parentNode.parentNode.remove();
  };

  let div_status_class = task.status ? " table-success " : " table-warning ";
  let del_btn_status_class = task.status ? " btn-outline-success disabled " : "btn-outline-primary ";

 // let icon_status_class = task.status ? " table-success " : " table-warning ";
  return (
    <tr className={"p2 mt-3 bg-opacity-10 "}>
      <td className={"text-dark" + div_status_class}><b style={{fontSize: 25}}>{task.status ? <FaRegCheckCircle /> : <FaRegCircle />}</b>
      </td>
      <td>{task.task}</td>
      <td>
        <button
        className={"btn "+ del_btn_status_class}
        onClick={() => completeTask()}
      >
        {task.status ? "Done" : "Check"}
      </button>
      <button
        className="btn btn-outline-danger mx-2"
        onClick={(event) => removeTask(event)}
      >
        Delete
      </button>
      </td>
    </tr>
  );
}



/*
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

*/