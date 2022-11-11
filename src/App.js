import React, { useState } from "react";
import List from "./list";

const App = () => {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setItem(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, item];
    setTodos(newTodos);
    setItem("");
  };
  const deletHandler = (indexValue) => {
    const deletTask = todos.filter((value, index) => index !== indexValue);
    setTodos(deletTask);
  };

  return (
    <div id="TO-DO">
      <div>
        <center>
          <h3 className="heading">Todo Managment Application </h3>
          <form onSubmit={clickHandler}>
            <input
              size="25"
              type="text"
              name="task"
              value={item}
              onChange={changeHandler}
            />{" "}
            &nbsp; &nbsp;
            <input type="submit" value="Add" />
          </form>
          <List todos={todos} deletHandler={deletHandler} />
        </center>
      </div>
    </div>
  );
};

export default App;
