import { useDispatch } from 'react-redux';
import React, {useEffect} from 'react';
import { asyncGetBillList } from './store/bill';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetBillList())
  }, [])

  return (
    <div className="App">
      this is app1
    </div>
  );
}

export default App;
