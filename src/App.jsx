import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCash, getCash } from './store/actions/cashActions';
import { TodoInput } from './components/TodoInput'

import { ReduxChild } from './components/ReduxChild';
import { TodoList } from './components/TodoList';

import './App.css';
// import { data } from './api/data';

function App() {
  const dispatch = useDispatch();
  // const [getData, setGetData] = useState([]);
  // const [loading, setLoading] = useState(true);

  const handlerAddCash = () => dispatch(addCash(10));
  const handlerGetCash = () => dispatch(getCash(5));

  useEffect(() => {
    // const getData = async () => {
    //   const res = await data;
    //   console.log(res)
    // }
    // getData()
    // setLoading(false);
    // setGetData(data.then(res => res));
    // console.log(getData);
  }, [])

  return (
    <>
      <h1>TODO</h1>
      <ReduxChild />
      <button onClick={handlerAddCash}>add</button>
      <button onClick={handlerGetCash}>get</button>
      {/* {loading && <h2>Loading...</h2>} */}
      <TodoInput />
      <TodoList />
    </>
  )
}

export default App;