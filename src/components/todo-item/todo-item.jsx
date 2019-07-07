import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css'

const ToDoItem = ({ text, isCompleted, removeTask, id, checkTask }) => (
  <li>
  <div id="x" onClick={() => removeTask(id)}></div>
  <span onClick={()=> checkTask(id)} className={isCompleted ? 'check':'checkout'}> {text}</span>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.string,

}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: ()=> {},
  id:''
}

export default ToDoItem;
