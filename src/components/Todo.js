import React, { useState } from "react";
import "./Todo.css";
import moment from "moment";
import List from "./Utilcomponents/List";
const Todo = () => {
  const [state, setState] = useState([
    {
      name: "",
      desc: "",
      date: "",
      isDone: false,
    },
  ]);
  const dueDateCompare = (date) => {
    return moment().diff(date, "minutes");
  };
  const [list, setList] = useState([]);

  const deleteToDo = (value) => {
    list.splice(value, 1);
    let newArr = [...list];
    setList(newArr);
  };
  const completeTask = (index) => {
    let newList = list.map((e, i) => {
      if (i == index) {
        e.isDone = !e.isDone;
      }
      return e;
    });
    setList(newList);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setList([...list, state]);
  };

  return (
    <div className="main">
      <h1 className="title"> To Do list</h1>
      <input
        type="text"
        className="taskName"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="text"
        className="taskDesc"
        name="desc"
        value={state.desc}
        onChange={handleChange}
      />
      <input
        type="date"
        className="Date"
        name="date"
        value={state.date}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleClick}>
        add tasks
      </button>

      {list.map((ele, i) => {
        return (
          <>
            <List
              key={i}
              taskName={ele.name}
              taskDesc={ele.desc}
              taskDate={ele.date}
              index={i}
              dueDate={dueDateCompare}
              isDone={ele.isDone}
              handleChange={handleChange}
              completeTask={completeTask}
              deleteToDo={deleteToDo}
            />
          </>
        );
      })}
    </div>
  );
};

export default Todo;
