
import { useState } from "react"

const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)


  const handleGoodClick = () => { setGood(good + 1) }
  const handleNeutralClick = () => { setNeutral(neutral + 1) }
  const handleBadClick = () => { setBad(bad + 1) }

  return (
    <div>
      <h1> give feedback </h1>
      <button onClick={handleGoodClick}> good
      </button >
      <button onClick={handleNeutralClick}>  neutral
      </button>
      <button onClick={handleBadClick} > bad
      </button >
      <h1>statistics</h1>

      <p>
        good {good}                <br></br>
        neutral {neutral}           <br></br>
        bad {bad}                    <br></br>
        all {good + neutral + bad}   <br></br>
        average {((good + neutral * 0 + bad * -1) / (good + neutral + bad))}  <br></br>
        positive {(good / (good + bad + neutral)) * 100}%        <br></br>


      </p>
    </div>
  )
}

export default App