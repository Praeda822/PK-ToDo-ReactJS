// With my callback functions, whenever I pass in a function and add a set of parentheses right away,
// like how I pass in my current index value to my deleteTask function,
// It will CALL THE FUNCTION RIGHT AWAY, instead of waiting for the button to be clicked
// I can get around this by using an arrow function, which will create a new function that will call my function ONLY WHEN the button is clicked
//
//

import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    // Changed ...tasks to an updater function that takes in the current state of tasks and returns a new state
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);

      setNewTask("");
    }
  }

  function deleteTask(index) {
    // If i's current index isn't equal to index I want to delete then put i into the new array of tasks
    // If they match, filter them out
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Please enter a task.."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              🔼
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              🔽
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
