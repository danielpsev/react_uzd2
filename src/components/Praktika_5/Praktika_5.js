import React, { useState } from "react";
import "./Praktika_5.css";
import { v4 as uuidv4 } from "uuid";
// import LessText from "./LessText/LessText";
import Task from "./Task/Task";
export default function Praktika_5() {
  let tasks = [
    {
      task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      status: false,
    },
    {
      task: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
      status: false,
    },
    {
      task: "There are many variations of passages of Lorem Ipsum available,",
      status: false,
    },
    {
      task: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, ",
      status: false,
    },
    {
      task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      status: false,
    },
  ];

  let tasks_list = tasks.map((el) => {
    return <Task key={uuidv4()} text={el.task} status={el.status}></Task>;
    
  });

  return( 
  <div className="d-flex flex-column">{tasks_list}
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Task</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {tasks_list}
  </tbody>
</table>

  </div>);
}


/*
import React, { useState } from "react";
import "./Praktika_5.css";
import { v4 as uuidv4 } from "uuid";
// import LessText from "./LessText/LessText";
import Task from "./Task/Task";
export default function Praktika_5() {
  let tasks = [
    {
      task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      status: false,
    },
    {
      task: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,",
      status: false,
    },
    {
      task: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
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

  return( 
  <div className="d-flex flex-column">{tasks_list}
<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Otto</td>
      <td>      
      <button
        className="btn btn-primary"
      >
        Check
      </button>
        
        <button
        className="mx-2 btn btn-danger" >
        Delete
      </button></td>
    </tr>
  </tbody>
</table>

  </div>);
}

*/