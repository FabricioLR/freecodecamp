import { useState } from 'react'
import "./style.css"

function App() {
  const [result, setResult] = useState(0)
  const [formula, setFormula] = useState([])
  const [lastValue, setLastValue] = useState()
  const operators = ["+", "-", "x", "/", "."]
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  function clear(){
    setFormula([])
    setResult(0)
    setLastValue()
  }

  function equals(){
    let localFormula = [...formula]
    if (operators.includes(lastValue) || localFormula.length == 0) return
    for (var index = 0; index < localFormula.length; index++){
      const value = localFormula[index]
      if (operators.includes(value)){
        let newValues = localFormula.filter((value, _i) => _i != index - 1 && _i != index && _i != index + 1)
        switch (value){
          case "x":
            newValues.splice(index - 1, 0, String((String(localFormula[index - 1]).includes(".") ? parseFloat(localFormula[index - 1]) : Number(localFormula[index - 1])) * (String(localFormula[index + 1]).includes(".") ? parseFloat(localFormula[index + 1]) : Number(localFormula[index + 1]))))
            localFormula = [...newValues]
            index = index - 2
            break
          case "/":
            newValues.splice(index - 1, 0, String((String(localFormula[index - 1]).includes(".") ? parseFloat(localFormula[index - 1]) : Number(localFormula[index - 1])) / (String(localFormula[index + 1]).includes(".") ? parseFloat(localFormula[index + 1]) : Number(localFormula[index + 1]))))
            localFormula = [...newValues]
            index = index - 2
            break
        } 
      }
    }
    for (var index = 0; index < localFormula.length; index++){
      (localFormula, indexconsole.log)
      const value = localFormula[index]
      if (operators.includes(value)){
        let newValues = localFormula.filter((value, _i) => _i != index - 1 && _i != index && _i != index + 1)
        switch (value){
          case "+":
            newValues.splice(index - 1, 0, String((String(localFormula[index - 1]).includes(".") ? parseFloat(localFormula[index - 1]) : Number(localFormula[index - 1])) + (String(localFormula[index + 1]).includes(".") ? parseFloat(localFormula[index + 1]) : Number(localFormula[index + 1]))))
            localFormula = [...newValues]
            index = index - 2
            break
          case "-":
            newValues.splice(index - 1, 0, String((String(localFormula[index - 1]).includes(".") ? parseFloat(localFormula[index - 1]) : Number(localFormula[index - 1])) - (String(localFormula[index + 1]).includes(".") ? parseFloat(localFormula[index + 1]) : Number(localFormula[index + 1]))))
            localFormula = [...newValues]
            index = index - 2
            break
        }
      }
    }
    setFormula([...localFormula])
    setResult(localFormula[0])
  }

  function add(value){
    switch (String(value)){
      case "1":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "2":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "3":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "4":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "5":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "6":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "7":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "8":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "9":
        if (numbers.includes(lastValue) || lastValue == "."){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        } else {
          if (lastValue == "-" && formula.length == 1){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "0":
        if (formula.length != 0 && !operators.includes(lastValue)){
          if (numbers.includes(lastValue)){
            let newValues = [...formula]
            newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
            setFormula(newValues)
            setLastValue(String(value))
          } else {
            setFormula(values => [...values, value])
            setLastValue(String(value))
          }
        }
        break
      case "+":
        if (formula.length == 0) break
        if (!operators.includes(lastValue)){
          setFormula(values => [...values, value])
          setLastValue(String(value))
        }
        break
      case "-":

        if (!operators.includes(lastValue)){
          setFormula(values => [...values, value])
          setLastValue(String(value))
        }
        break
      case "x":
        if (formula.length == 0) break
        if (!operators.includes(lastValue)){
          setFormula(values => [...values, value])
          setLastValue(String(value))
        }
        break
      case "/":
        if (formula.length == 0) break
        if (!operators.includes(lastValue)){
          setFormula(values => [...values, value])
          setLastValue(String(value))
        }
        break
      case ".":
        if (formula.length == 0) break
        if (!operators.includes(lastValue) && numbers.includes(lastValue)){
          let newValues = [...formula]
          newValues[newValues.length - 1] = newValues[newValues.length - 1] + String(value)
          setFormula(newValues)
          setLastValue(String(value))
        }
        break
    }
  }

  return (
    <div className="app">
      <div className="calculator">
        <div className="formulaScreen">{
          formula.length > 0 ?
            formula.join(" ")
          :
            null
        }</div>
        <div className="outputScreen" id="display">{result}</div>
        <div>
          <button onClick={() => clear()} className="jumbo" id="clear" value="AC" style={{background: "rgb(172, 57, 57)"}}>AC</button>
          <button onClick={() => add("/")} id="divide" value="/" style={{background: "rgb(102, 102, 102)"}}>/</button>
          <button onClick={() => add("x")} id="multiply" value="x" style={{background: "rgb(102, 102, 102)"}}>x</button>
          <button onClick={() => add("7")} id="seven" value="7">7</button>
          <button onClick={() => add("8")} id="eight" value="8">8</button>
          <button onClick={() => add("9")} id="nine" value="9">9</button>
          <button onClick={() => add("-")} id="subtract" value="‑" style={{background: "rgb(102, 102, 102)"}}>‑</button>
          <button onClick={() => add("4")} id="four" value="4">4</button>
          <button onClick={() => add("5")} id="five" value="5">5</button>
          <button onClick={() => add("6")} id="six" value="6">6</button>
          <button onClick={() => add("+")} id="add" value="+" style={{background: "rgb(102, 102, 102)"}}>+</button>
          <button onClick={() => add("1")} id="one" value="1">1</button>
          <button onClick={() => add("2")} id="two" value="2">2</button>
          <button onClick={() => add("3")} id="three" value="3">3</button>
          <button onClick={() => add("0")} className="jumbo" id="zero" value="0">0</button>
          <button onClick={() => add(".")} id="decimal" value=".">.</button>
          <button onClick={equals} id="equals" value="=" style={{background: "rgb(0, 68, 102)", position: "absolute", height: "130px", bottom: "5px"}}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
