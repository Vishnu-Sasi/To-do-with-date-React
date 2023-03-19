import React from "react";
const List = (props) => {
  console.log(props.dueDateCompare);
  return (
    <div
      className="list"
      style={{
        borderColor: props.dueDate(props.taskDate) > 0 ? "yellow" : "black",
      }}
    >
      <h1
        style={{
          textDecoration: props.isDone ? "line-through" : "none",
        }}
      >
        {props.taskName}
      </h1>
      <p
        style={{
          textDecoration: props.isDone ? "line-through" : "none",
        }}
      >
        {props.taskDesc}
      </p>
      <h3
        style={{
          textDecoration: props.isDone ? "line-through" : "none",
        }}
      >
        {props.taskDate}
      </h3>
      {props.dueDate(props.taskDate) > 0 ? (
        <>
          <h4 style={{ color: "red" }}>Due day is Passed</h4>
        </>
      ) : (
        ""
      )}
      <div>
        <label htmlFor="check" className="label">
          complete task
        </label>
        <input
          type="checkbox"
          className="check"
          onClick={() => {
            return props.completeTask(props.index);
          }}
        />
      </div>

      <button
        className="delete"
        onClick={() => {
          return props.deleteToDo(props.index);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default List;
