import { useRef } from 'react'
import { useState } from 'react'
import "./style.css"

function App() {
  const [volume, setVolume] = useState(30)
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(false)
  const [display, setDisplay] = useState(" ")
  const [currentAudio, setCurrentAudio] = useState()

  return (
    <div className="inner-container" id="drum-machine">
      <div className="pad-bank">
        <div className="drum-pad" id="Heater-1" onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3").play() : null; setDisplay("Heater 1")}}>
          <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q
        </div>
        <div className="drum-pad" id="Heater-2" onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3").play() : null; setDisplay("Heater 2")}}>
          <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W
        </div>
        <div className="drum-pad" id="Heater-3" onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3").play() : null; setDisplay("Heater 3")}}>
          <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E
        </div>
        <div className="drum-pad" id="Heater-4" onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp").play() : null; setDisplay("Heater 4")}}>
          <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A
        </div>
        <div className="drum-pad" id="Clap"onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3").play() : null; setDisplay("Clap")}}>
          <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S
        </div>
        <div className="drum-pad" id="Open-HH"onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3").play() : null; setDisplay("Open HH")}}>
          <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D
        </div>
        <div className="drum-pad" id="Kick-n'-Hat"onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3").play() : null; setDisplay("Kick n' Hat")}}>
          <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z
        </div>
        <div className="drum-pad" id="Kick"onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3").play() : null; setDisplay("Kick")}}>
          <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X
        </div>
        <div className="drum-pad" id="Closed-HH"onClick={() => {power ? new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3").play() : null; setDisplay("Close HH")}}>
          <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C
        </div>
      </div>
      <div className="controls-container">
        <div className="control">
          <p>Power</p>
          <div className="select">
            <div className="inner" style={power ? {float: "right"} : {float: "left"}} onClick={() => power ? setPower(false) : setPower(true)}></div>
          </div>
        </div>
        <p id="display">{display}</p>
        <div>
          <input max="100" min="0" step="1" type="range" value={volume} onChange={(e) => {setVolume(e.target.value); setDisplay("Volume: " + e.target.value)}}/>
        </div>
        <div className="control">
          <p>Bank</p>
          <div className="select">
            <div className="inner" style={bank ? {float: "right"} : {float: "left"}} onClick={() => bank ? setBank(false) : setBank(true)}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
