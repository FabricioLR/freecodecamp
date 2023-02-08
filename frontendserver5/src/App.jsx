import { useEffect } from 'react'
import { useState } from 'react'
import "./style.css"

function App() {
  const [breakLength, setBreakLength] = useState(25)
  const [sessionLength, setSessionLength] = useState(25)
  const [selectBreakLength, setSelectBreakLength] = useState(25)
  const [selectSessionLength, setSelectSessionLength] = useState(25)
  const [currentTimerStatus, setCurrentTimerStatus] = useState("Session")
  const [status, setStatus] = useState("paused")
  const [seconds, setSeconds] = useState(0)

  function reset(){
    setStatus("paused")
    setTimeout(() => {
      setBreakLength(25)
      setSelectBreakLength(25)
      setSessionLength(25)
      setSelectSessionLength(25)
      setSeconds(0)
      setCurrentTimerStatus("Session")
    }, "1000")
  }
  function breakDecrement(){
    if (breakLength - 1 < 1) return
    setBreakLength(breakLength - 1)
    setSelectBreakLength(selectBreakLength - 1)
  }
  function breakIncrement(){
    if (breakLength + 1 > 60) return
    setBreakLength(breakLength + 1)
    setSelectBreakLength(selectBreakLength + 1)
  }
  function sessionDecrement(){
    if (sessionLength - 1 < 1) return
    setSessionLength(sessionLength - 1)
    setSelectSessionLength(selectSessionLength - 1)
  }
  function sessionIncrement(){
    if (sessionLength + 1 > 60) return
    setSessionLength(sessionLength + 1)
    setSelectSessionLength(selectSessionLength + 1)
  }
  useEffect(() => {
    if (status == "started"){
      if (currentTimerStatus == "Session"){
        const settimeout = setTimeout(() => {
          if (seconds == 0){
            setSessionLength(sessionLength - 1)
          }
          setSeconds(seconds == 0 ? 59 : seconds - 1)
        }, "1000")
        if (sessionLength == -1){
          clearTimeout(settimeout)
          setCurrentTimerStatus("Break")
          setBreakLength(selectBreakLength)
          setSeconds(0)
        }
      } else {
        const settimeout = setTimeout(() => {
          if (seconds == 0){
            setBreakLength(breakLength - 1)
          }
          setSeconds(seconds == 0 ? 59 : seconds - 1)
        }, "1000")
        if (breakLength == -1){
          clearTimeout(settimeout)
          setCurrentTimerStatus("Session")
          setSessionLength(selectSessionLength)
          setSeconds(0)
        }
      }
    }
  }, [status, sessionLength, breakLength, currentTimerStatus, selectBreakLength, selectSessionLength, seconds])

  return (
    <div id="container">
      <div id="app">
        <div>
          <div className="main-title">25 + 5 Clock</div>
          <div className="length-control">
            <div id="break-label">Break Length</div>
            <button onClick={breakDecrement} className="btn-level" id="break-decrement" value="-" disabled={status == "started" ? true : false}>
              -
            </button>
            <div className="btn-level" id="break-length">{selectBreakLength}</div>
            <button onClick={breakIncrement} className="btn-level" id="break-increment" value="+" disabled={status == "started" ? true : false}>
              +
            </button>
          </div>
          <div className="length-control">
            <div id="session-label">Session Length</div>
            <button onClick={sessionDecrement} className="btn-level" id="session-decrement" value="-" disabled={status == "started" ? true : false}>
              -
            </button>
            <div className="btn-level" id="session-length">{selectSessionLength}</div>
            <button onClick={sessionIncrement} className="btn-level" id="session-increment" value="+" disabled={status == "started" ? true : false}>
              +
            </button>
          </div>
          <div className="timer">
            <div className="timer-wrapper">
              <div id="timer-label">{currentTimerStatus}</div>
              <div id="time-left">
                {
                  currentTimerStatus == "Session" ?
                    ('0' + sessionLength).slice(-2) + ":" + ('0' + seconds).slice(-2)
                  :
                    ('0' + breakLength).slice(-2) + ":" + ('0' + seconds).slice(-2)
                }
              </div>
            </div>
          </div>
          <div className="timer-control">
            <button id="start_stop">
              <p onClick={() => setStatus("started")}>Play</p>
              <p onClick={() => setStatus("paused")}>Pause</p>
            </button>
            <button id="reset">
              <p onClick={reset}>Reset</p>
            </button>
          </div>
          <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
      </div>
    </div>
  )
}

export default App
