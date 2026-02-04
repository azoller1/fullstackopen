import { use, useState } from 'react'

const Stats = (props) => {

  if (props.total === 0) {
    return (
      <div>
        <h3>Stats</h3>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
  <div>
    <h3>Stats</h3>
    <table>
      <tbody>
          <tr>
            <td><StatLine text="good" /></td>
            <td><StatLine statvalue={props.good} /></td>
          </tr>
          <tr>
            <td><StatLine text="bad" /></td>
            <td><StatLine statvalue={props.bad} /></td>
          </tr>
          <tr>
            <td><StatLine text="neutral" /></td>
            <td><StatLine statvalue={props.neutral} /></td>
          </tr>
          <tr>
            <td><StatLine text="avg" /></td>
            <td><StatLine statvalue={props.avg} /></td>
          </tr>
          <tr>
            <td><StatLine text="total" /></td>
            <td><StatLine statvalue={props.total} /></td>
          </tr>
          <tr>
            <td><StatLine text="positive" /></td>
            <td><StatLine statvalue={props.percent} symbol="%" /></td>
          </tr>
        </tbody>
    </table>
  </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.click}>{props.rating}</button>
    </div>
  )
}

const StatLine = (props) => {
  if (props.symbol === "%") {
    return (
    <div>
      <p>{props.text} {props.statvalue}%</p>
    </div>
  )
  }
  return (
    <div>
      <p>{props.text} {props.statvalue}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state

  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)
  const percent = (good/(bad + good + neutral)*100)

  const clickGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAvg(avg + 1)
  }
  const clickBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAvg(avg - 1)
  }
  const clickNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAvg(avg + 0)
  }

  return (
    <div>
      <h3>Feedback</h3>
      <Button click={clickGood} rating="good" />
      <Button click={clickBad} rating="bad" />
      <Button click={clickNeutral} rating="neutral" />
      <Stats good={good} bad={bad} neutral={neutral} total={bad + good + neutral}
      avg={avg} percent={percent} />
    </div>
  )
}

export default App