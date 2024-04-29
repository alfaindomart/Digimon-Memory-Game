import { useState } from 'react'
import { useEffect } from 'react'
// import {nanoid} from 'nanoid'

import './App.css'
import { nanoid } from 'nanoid'

function App() {

  const [digimon, setDigimon] = useState([])
  const [clickedMon, setClickedMon] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)


  useEffect(() => {
    // let ignore = false;
    console.log(digimon)
    fetch('https://digimon-api.vercel.app/api/digimon')
    .then((response) => response.json())
    .then ((data) => {
      const filteredMons = data.slice(0, 10)
      shuffle(filteredMons)
      setDigimon(filteredMons)}
    )
    console.log(digimon)

    // return () => {
    //   ignore = true
    // }

  }, [clickedMon])

  // useEffect(() => {
  //   console.log(digimon)
  //   const shuffledMons = shuffle(digimon)
  //   setDigimon(digimon, shuffledMons)
  // }, [clickedMon])
  

function differentCardsBtn() {
  setScore(score + 1)
}

function sameCardsBtn() {
  if (score > highScore) {
    setHighScore(score)
  }
  setScore(0)
}

function clickImg(e) {
  console.log(clickedMon)
  const clickedMonsId = e.target.id
  const uHaveAmnesia = clickedMon.find((card) => card === clickedMonsId )


  if (uHaveAmnesia) {
    console.log('yes amnesia')
    setClickedMon([])
    sameCardsBtn()
  } else {
    console.log('no...?')
    setClickedMon([...clickedMon, clickedMonsId])
    differentCardsBtn()
    console.log(clickedMon)
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const currentItemPosition = arr[i]
    const randomIndex = Math.floor(Math.random() * (i + 1))
    arr[i] = arr[randomIndex]
    arr[randomIndex] = currentItemPosition
  }
  return arr
}

console.log(clickedMon)
console.log(digimon)


return (

    <>
    <div className='score-wrap'>
      <button onClick={differentCardsBtn}>Simulate clicking different cards</button>
      <button onClick={sameCardsBtn}>Simulate clicking the same cards</button>
      <div className='curr-score'>Current Score: {score}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
    <div className='cards-wrapper'>
      {digimon && digimon.map(
        (mons) => <img src={mons.img} id={mons.name} alt={'A picture of ' + mons.name}  key={nanoid()} onClick={clickImg}/>
        )}
    </div>
    </>
  )
}

export default App
