import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, removeTask, checkTask }) => (
  <ul>
  {tasksList.map(({ id, text, isCompleted }) => (
<ToDoItem checkTask={checkTask} removeTask={removeTask} id={id} key={id} text={text} isCompleted={isCompleted} />
  ))}
</ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  checkTask: PropTypes.func,
}

ToDoList.defaultProps ={
  tasksList: [],
  removeTask:() => {},
  checkTask:() => {}
}

export default ToDoList;
