import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Navbar() {

    const dispatch = useDispatch();
    const [timer, setTimer] = useState(false);
    let startGame = useSelector(state => state.start);
    let time = {
        m: useSelector(state => state.m),
        s: useSelector(state => state.s)
    };
    
    useEffect(() => {
        let stopWatch = null;
        if (timer === true) {
            dispatch({
                type: "START_GAME",
                payload: true
            });
            run();
            stopWatch = setInterval(run, 1000);
        } else if (timer === false) {
            clearInterval(stopWatch);
            dispatch({
                type: "START_GAME",
                payload: false
            });
        }
        return () => clearInterval(stopWatch);
    }, [timer, startGame])

    useEffect(() => {
        if (startGame === false) setTimer(false);
    }, [startGame])

    const run = () => {
        if (time.s === 60) {
            dispatch({
                type: "STOPWATCH_M",
                payload: 1
            });
            dispatch({
                type: "STOPWATCH_S",
                payload: time.s = 0
            });
        }
        dispatch({
            type: "STOPWATCH_S",
            payload: time.s++
        });
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid"><a className="navbar-brand" href="index.html">Игра "Память"</a>
            <p>
                <span>{(time.m >= 10) ? time.m : ("0" + time.m)}</span>
                &nbsp;:&nbsp;
                <span>{(time.s >= 10) ? time.s : ("0" + time.s)}</span>
            </p>
            <button className="btn btn-primary" type="button" onClick={() => setTimer(true)} disabled={timer}>Старт</button>
        </div>
    </nav>
  )
}

export default Navbar