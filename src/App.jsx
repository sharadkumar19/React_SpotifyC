import React, { useContext } from 'react'
// import "./App.css"
import Slidebar from './components/Slidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const {audioref,track}=useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Slidebar/>
        <Display/>
      </div>
        <Player/>
        <audio ref={audioref} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
