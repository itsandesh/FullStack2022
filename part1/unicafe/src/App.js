
import { useState } from "react"


const Statistics = (props) => {
  return (
    <div>
      good {props.good}                <br></br>
      neutral {props.neutral}           <br></br>
      bad {props.bad}                    <br></br>
      all {props.good + props.neutral + props.bad}   <br></br>
      average {((props.good + props.neutral * 0 + props.bad * -1) / (props.good + props.neutral + props.bad))}  <br></br>
      positive {(props.good / (props.good + props.bad + props.neutral)) * 100} %        <br></br>
    </div>
  )
}


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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App