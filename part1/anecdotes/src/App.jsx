import { useState } from 'react'

const Highest = ({anecdotes, votes}) => {
  const highVotes = Math.max(...votes)
  const highVoteIndex = votes.indexOf(highVotes)
  const highestVote = anecdotes[highVoteIndex]
  if (highVotes == 0) {
    return (
      <p>No high votes yet</p>
    )
  }
  return (
    <div>
      <p>{highestVote}</p>
      <p>{highVotes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  

  const updateVotes = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const randAnecdote = () => {
    const minNum = Math.ceil(0)
    const maxNum = Math.floor(8)
    const randSelected = Math.floor(Math.random() * (maxNum - minNum) + minNum)
    setSelected(randSelected)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}<br></br>
      Anecdote has {votes[selected]} votes<br></br>
      <button onClick={updateVotes}>vote</button>
      <button onClick={randAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Highest anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
