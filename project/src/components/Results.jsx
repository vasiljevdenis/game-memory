import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Results() {

    let time = {
      m: useSelector(state => state.m),
      s: useSelector(state => state.s)
    };
    let startGame = useSelector(state => state.start);
    const [result, setResult] = useState("d-none");
    useEffect(() => {
      if (startGame === true) setResult("d-none");
      if (startGame === false) setResult("d-block result");
    }, [startGame])
  
  return (
    <div className={result}>
        <h2>Текущий результат: {time.m} мин. {time.s} сек.</h2>
        </div>
  )
}

export default Results