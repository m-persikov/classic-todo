import { useDispatch } from 'react-redux';
import { addCash, getCash } from './store/actions';

import { ReduxChild } from './components/ReduxChild';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const handlerAddCash = () => dispatch(addCash(10));
  const handlerGetCash = () => dispatch(getCash(5));

  return (
    <>
      <h1>TODO</h1>
      <button onClick={handlerAddCash}>add</button>
      <button onClick={handlerGetCash}>get</button>
      <ReduxChild />
    </>
  )
}

export default App;