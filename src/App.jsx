
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, dencrement, plusbyvalue } from './redux/counterReducer';


function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  const hanldIncrement = () => {
    dispatch(increment())
  }
  const hanldDecrement = () => {
    dispatch(dencrement())
  }
  const hanldPlusByValue = () => {
    dispatch(plusbyvalue(10))
  }
  return (
    <>
      <div className='text-2xl font-semibold'>{count}</div>
      <div className='flex items-center justify-center'>
        <div className='p-5 w-[300px]'>
          <div className='p-2 rounded bg-gray-300' onClick={hanldDecrement}>-</div>
        </div>
        <div className='p-5 w-[300px]'>
          <div className='p-2 rounded bg-gray-300' onClick={hanldIncrement}>+</div>
        </div>
        <div className='p-5 w-[300px]'>
          <div className='p-2 rounded bg-green-300' onClick={hanldPlusByValue}>+ 10</div>
        </div>
      </div>
    </>
  )
}

export default App
