import React, { useState } from "react";
import "./Praktika_5.css";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task/Task";
export default function Praktika_5() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      status: false,
    },
    {
      id: 2,
      task: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
      status: false,
    },
    {
      id: 3,
      task: "There are many variations of passages of Lorem Ipsum available,",
      status: false,
    },
    {
      id: 4,
      task: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, ",
      status: false,
    },
    {
      id: 5,
      task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      status: false,
    },
  ]);

  const changeStatus = (id) => {
    let data_copy = [...tasks];
    data_copy.forEach((task) => {
      if (task.id == id) {
        task.status = true;
        return;
      }
    });
    setTasks(data_copy);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    console.log("Deleting: " + id);
  };

  let tasks_list = tasks.map((el) => {
    return (
      <Task
        key={uuidv4()}
        id={el.id}
        text={el.task}
        status={el.status}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
      />
    );
  });

  return (
    <div className="d-flex flex-column">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Task</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{tasks_list}</tbody>
      </table>
    </div>
  );
}
