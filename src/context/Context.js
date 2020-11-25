import React, { useState, createContext } from "react";

const Context = createContext();
const ContextProvider = (props) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Context.Provider value={{ current, setCurrent, next, prev }}>
      {props.children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { ContextProvider, Consumer, Context };
