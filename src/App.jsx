import { useDispatch } from 'react-redux';

import './App.css';
import { ReduxChild } from './components/ReduxChild';

function App() {

  const dispatch = useDispatch();

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 20 })
  }

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 10 })
  }

  return (
    <>
      <h1>TODO</h1>
      <button onClick={addCash}>add</button>
      <button onClick={getCash}>get</button>
      <ReduxChild />
    </>
  )
}

export default App;