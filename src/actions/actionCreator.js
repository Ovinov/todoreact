import { ADD_TASK, REMOVE_TASK, CHECK_TASK } from '../constants';

export const addTast = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});

export const removeTask = id => ({
  type:  REMOVE_TASK,
  id
});

export const checkTask= id =>({
  type: CHECK_TASK,
  id
})
