
import { useEffect } from 'react';
import './App.css'
import { useDispatch } from "react-redux";
import { getNews } from './sagas/news/newsSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  return (
    <>
      cc
    </>
  )
}

export default App
