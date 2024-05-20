import { useState } from "react"
import "./App.css"

function App() {
  const[bmi, setBmi] = useState("")
  const[rate, setRate] = useState('')
  function calculateBmi(height: number, weight: number) {
    const bmiV:number=weight / (height * height)
    setBmi(bmiV.toFixed(2))
    console.log(bmiV);
    if (bmiV < 18.5) {
      setRate("Underweight")
    } else if (bmiV < 25) {
      setRate("Normal")
    } else if (bmiV < 30) {
      setRate("Overweight")
    } else {
      setRate("Obese")
    }
  }
  function handleSubmit(e:any) {
    e.preventDefault()
    const height = e.target[0].value/100
    const weight = e.target[1].value
    console.log(height, weight);
    calculateBmi(height, weight)
    
  }

  return (
    <>
      <div className="container">
        <div className="form">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="height">Enter Your Height (cm): </label>
              <input type="number" />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Enter Your Weight (kg): </label>
              <input type="number" />
            </div>
            <button type="submit">Send</button>
          </form>
          {rate &&
            <div className="result">  
              <p>{bmi}</p>
              <p>{rate}</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default App
