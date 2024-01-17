import { TodoInput } from './components/TodoInput'

import { TodoList } from './components/TodoList';

import './App.css';
import { data } from './api/data';

export const App = () => {

  return (
    <>
      <h1>TODO</h1>
      <TodoInput />
      <TodoList />
    </>
  )
}