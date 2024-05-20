import "./App.css"
import { Calculator } from "./components/BMIcalculate"
import { Text } from "./components/text"
import { Analytics } from "@vercel/analytics/react"

function App() {


  return (
    <>
    <Analytics />
    <div style={{display:"flex", justifyContent:"center"}}>
        <Calculator />
    </div>
      <div>
        <Text/>
      </div>
      
    </>
  )
}

export default App
