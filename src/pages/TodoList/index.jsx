import React from "react";

import Header from "./components/Header";
const TodoList = () => {
  const addItem = React.useCallback(() => {}, []);

  return (
    <div>
      <Header addItem={addItem} />
    </div>
  );
};

export default TodoList;
