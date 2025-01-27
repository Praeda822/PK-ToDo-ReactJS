# To Do List Application

## Table of Contents

- [To Do List Application](#to-do-list-application)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Still To Do](#still-to-do)
  - [Features](#features)
  - [How It Works](#how-it-works)
    - [React's `useState` Hook](#reacts-usestate-hook)
      - [React's `useState` Hook: `""` vs. `[]` Arguments](#reacts-usestate-hook--vs--arguments)
    - [Callback Functions and Arrow Functions](#callback-functions-and-arrow-functions)
  - [Application Structure](#application-structure)
    - [Input Handling](#input-handling)
      - [`handleInputChange`](#handleinputchange)
    - [Adding Tasks](#adding-tasks)
      - [`addtask` \& Updater Functions: What is an Updater Function?](#addtask--updater-functions-what-is-an-updater-function)
    - [Task Management](#task-management)
      - [`deleteTask`](#deletetask)
      - [`moveTaskUp` \& `moveTaskDown`](#movetaskup--movetaskdown)

## Overview

PKs **To Do List** application is a React-based project designed to help users manage tasks effectively. It leverages React’s `useState` hook for state management and provides core functionalities such as adding, deleting, and reordering tasks. This ReadMe not only documents the application’s features but also offers detailed explanations of its components and underlying React concepts to ensure clarity for both beginners and seasoned developers.

---

### Still To Do

1. Add either **localStorage** or **sessionStorage** integration to save tasks after page refresh. **[ ]**
2. Allow users the ability to edit existing tasks within the list. **[ ]**
3. Add a _time submitted_ field that works off the in-built geolocation API. **[ ]**
4. Implement a UI/UX library like **Material-UI** to enhance application aesthetic. **[ ]**
5. Add animations for task addition, deletion, and reordering. **[ ]**
6. Implement error handling for empty task submission & improved UX. **[ ]**
7. Let Lozza muck around with the app to find the bugs I never would have thought of. **[ ]**

---

## Features

- **Add Tasks**: Users can input tasks into a text field and add them to the list.
- **Delete Tasks**: Users can remove tasks from the list by clicking a "Delete" button.
- **Reorder Tasks**:
  - Move tasks up using the 🔼 button.
  - Move tasks down using the 🔽 button.
- **Dynamic State Management**: Uses React's `useState` to manage the application state in real time.

---

## How It Works

### React's `useState` Hook

`useState` is a React hook that allows functional components to maintain state. In my app I've used it to manage:

1. `tasks`, an array that stores the list of tasks.
2. `newTask`, an array that stores the value of the current task being typed into the input field.

#### React's `useState` Hook: `""` vs. `[]` Arguments

- Arrays are ideal for storing multiple tasks and allow easy data manipulation through methods like `.map()` and `.filter()`.
- **Empty String (`""`)**, an empty string represents the initial string value state of `newTask` to ensure the input field is cleared after a task has been added.
- **Empty Array (`[]`)**, an empty array represents the initial state value of `tasks` because the list of tasks will initially be empty.

### Callback Functions and Arrow Functions

When I directly invoke a function (`onClick={deleteTask(index)}`), that function will execute immediately upon rendering, and if I want to prevent this, I need to use an **arrow function** (`onClick={() => deleteTask(index)}`), which will delay that function's execution call _until_ the button is clicked.

---

## Application Structure

### Input Handling

#### `handleInputChange`

Updates the `newTask` state whenever the user types into the input field.

```javascript
function handleInputChange(event) {
  setNewTask(event.target.value);
}
```

### Adding Tasks

#### `addtask` & Updater Functions: What is an Updater Function?

- An updater function ensures that any state updates are based on the previously enumerated state (_t, in this case_) and this is crucial when working with asynchronous state updates as React _batches_ state updates for performance.
- `addtask` checks if the input isn’t empty by checking the current state of the `newTask` array, (`newTask.trim() !== ""`).
- `addtask` then uses an **updater function** that takes in the current state of tasks and returns a new state (`t`): `setTasks((t) => [...t, newTask])`.

### Task Management

#### `deleteTask`

- `deleteTask` uses the `filter` method to remove a task from the list.
- If the current index of `i` isn't equal to index I want to delete then put the state value of `i` into the new array of tasks, `newTask,` and update the state of `tasks` with this new array by using the `setTasks` setter function.
- If they match, filter them out (_delete them_).

```javascript
function deleteTask(index) {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
}
```

#### `moveTaskUp` & `moveTaskDown`

- `moveTaskUp` and `moveTaskDown` use the `map` method to reorder tasks.
- Both functions take in the current index of the task to be moved and create a new array of tasks, `updatedTasks`
- Then I create a new array of tasks, `updatedTasks`, to store the updated list of tasks.
- Then I used _array destructuring_ to swap the positions of the current index and the index either before and/or after it, respectively.
- Finally, I update the state of `tasks` with the new array of `updatedTasks`.

```javascript
if (index > 0) {
  const updatedTasks = [...tasks];
  [updatedTasks[index], updatedTasks[index - 1]] = [
    updatedTasks[index - 1],
    updatedTasks[index],
  ];
  setTasks(updatedTasks);
}
```
