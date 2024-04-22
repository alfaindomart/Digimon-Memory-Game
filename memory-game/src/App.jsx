import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  const [digimon, setDigimon] = useState([])
  // const [score, setScore] = useState(0)

  useEffect(() => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then((response) => response.json())
      .then ((data) => {
        const filteredMons = data.slice(0, 10)
        setDigimon(filteredMons)})
      .catch((error) => {
        return console.error(error)
      })
  }, [])

  const digiSliced = digimon.map(mons => 
    <img src={mons.img} alt={'A picture of ' + mons.name} key={mons.id} onClick={console.log('test klik gambar')} />
    )


  return (

    <>
    <div className='score-wrap'>
      <div className='curr-score'>Current Score: </div>
      <div className="high-score">High Score: </div>
    </div>
    <div className='cards-wrapper'>
      {digiSliced}
    </div>
    </>
  )
}

export default App
