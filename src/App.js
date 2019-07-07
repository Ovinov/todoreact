import React,{ Fragment } from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/title';

const App = () => (
  <Fragment className="content">
  <Title title="Список дел"   />
  <ToDo />
  </Fragment>
)

export default App;
