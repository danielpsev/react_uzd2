import React, { useState } from "react";
import "./Praktika_5.css";
import { v4 as uuidv4 } from "uuid";
// import LessText from "./LessText/LessText";
import Task from "./Task/Task";
export default function Praktika_5() {
  let tasks = [
    {
      task: "Task 1 ",
      status: false,
    },
    {
      task: "Task 2 ",
      status: false,
    },
    {
      task: "Task 3 ",
      status: false,
    },
    {
      task: "Task 4 ",
      status: false,
    },
    {
      task: "Task 5 ",
      status: false,
    },
  ];

  let tasks_list = tasks.map((el) => {
    return <Task key={uuidv4()} text={el.task} status={el.status}></Task>;
  });

  return <div className="d-flex flex-column">{tasks_list}</div>;
}
