import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {

    const {id}=useParams()
    // console.log(id)
    const albumdata=albumsData[id];
    // console.log(albumdata)
    const {playwithID} = useContext(PlayerContext)

  return (
    <>
      <Navbar/>
      <div className='mt-10 flex flex-col gap-8 md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumdata.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
            <h4>{albumdata.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5 mr-1' src={assets.spotify_logo} alt="" />
                <b className='mr-2'>Spotify</b>
                * 1,90,700 likes
                * <b>50 songs</b>
                <span className='ml-2'>about 2 hrs 30 mins</span>
            </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-aqua'>
        <p><b className='mr-4'>#</b>Title</p>
        <p className='hidden sm:block'>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />

      </div>
      <hr />
      {
        songsData.map((item,index)=>(
            <div onClick={()=>playwithID(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-aqua hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white flex'>
                    <span className='mr-4 text-[#a7a7a7]'>{index+1}</span>
                    <img className='inline w-10 mr-5' src={item.image} alt="" />
                    {item.name}
                </p>
                <p className='text-[15px] hidden sm:block'>
                    {albumdata.name}
                </p>
                <p className='text-[15px] hidden sm:block'>3 days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
