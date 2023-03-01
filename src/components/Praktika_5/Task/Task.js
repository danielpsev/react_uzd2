import React, { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
export default function Task(props) {
  const { id, text, status, changeStatus, deleteTask } = props;

  let div_status_class = status ? " table-success " : " table-warning ";
  let del_btn_status_class = status
    ? " btn-outline-success disabled "
    : "btn-outline-primary ";

  return (
    <tr className={"p2 mt-3 bg-opacity-10 "}>
      <td className={"text-dark" + div_status_class}>
        <b style={{ fontSize: 25 }}>
          {status ? <FaRegCheckCircle /> : <FaRegCircle />}
        </b>
      </td>
      <td>{text}</td>
      <td>
        <button
          className={"btn " + del_btn_status_class}
          onClick={() => changeStatus(id)}
        >
          {status ? "Done" : "Check"}
        </button>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
