import {ADD_TASK, REMOVE_TASK, CHECK_TASK} from '../constants';

const TASKS = [
  {
    id: 1,
    text: 'Выучить html',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Выучить css',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'Выучить js',
    isCompleted: true,
  },
  {
    id: 4,
    text: 'Выучить React',
    isCompleted: false,
  }
];

const tasks =(state =TASKS, { id, text, isCompleted, type }) =>{
  switch(type){
    case ADD_TASK :
    return [
      ...state, {
        id,
        text,
        isCompleted,
      }
    ];
    case REMOVE_TASK:
       return [...state].filter(task => task.id !== id);
       case CHECK_TASK:
       return [...state].map(task =>{
         if(task.id === id){
           task.isCompleted = !task.isCompleted;
         }
         return task;
       });
    default:
    return state;
  }
}

export default tasks;
