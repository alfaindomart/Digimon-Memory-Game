import { useState } from 'react'
import { useEffect } from 'react'
// import {nanoid} from 'nanoid'

import './App.css'

function App() {

  const [digimon, setDigimon] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
    .then((response) => response.json())
    .then ((data) => {
      const filteredMons = data.slice(0, 10)
      setDigimon(...digimon, filteredMons)
    })
    .catch((error) => {
      return console.error(error)
    })
  }, [])

  console.log(digimon)

  const digiSliced = digimon.map(
    (mons, index) => <img src={mons.img} alt={'test'} key={index} onClick={Testbtn}/>
    )

    console.log(digiSliced)


function Testbtn() {
  setScore(score + 1)
}

  return (

    <>
    <div className='score-wrap'>
      <button onClick={Testbtn}>click</button>
      <div className='curr-score'>Current Score: {score}</div>
      <div className="high-score">High Score: {score}</div>
    </div>
    <div className='cards-wrapper'>
      {digiSliced}
    </div>
    </>
  )
}

export default App
