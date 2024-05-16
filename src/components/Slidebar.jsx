import React from 'react'
import {assets} from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const Slidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around gap-2'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-4 pl-8 cursor-pointer'>
            <img className='inline-block w-5 mr-9 font-large' src={assets.spotify_logo} alt="" />
            <b className='mr-2 font-2xl'>Spotify</b>
            
        </div> 
        <div onClick={()=>navigate('/')} className='flex items-center gap-4 pl-8 cursor-pointer'>
            
            <img className='w-6' src={assets.home_icon} alt="" />
            <p className='font-medium'>Home</p>
        </div> 
        <div className='flex items-center gap-4 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt="" />
            <p className='font-medium'>Search</p>
        </div> 
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex item-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold pt-1'>Your Library</p>
                </div>
                <div className="flex item-center gap-3">
                  <img className='w-5' src={assets.arrow_icon} alt="" />
                  <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#212121] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-4'>
                <h1>Create Your First List</h1>
                <p className='font-light '>It's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create</button>
            </div>
            <div className='p-4 bg-[#212121] m-2 rounded font-semibold flex flex-col item-start justify-start gap-1 pl-4 mt-4'>
                <h1>Let's findsome podcasts to follow</h1>
                <p className='font-light '>We will keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
            </div>
      </div>
    </div>
  )
}

export default Slidebar
