import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

const TaskOne = () => {
  return (
    <div>
      <ClassComponent name="Squidword tentakel" />
      <FunctionalComponent name="ahmad wahyudi" greeting="Selamat belajar" />
    </div>
  );
};

export default TaskOne;
