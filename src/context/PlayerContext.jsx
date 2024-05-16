import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../assets/assets';

export const PlayerContext=createContext()

const PlayerContextprovider=(props)=>{

    // onlyfor audio 
    const audioref=useRef();

        // only for seekbar 
    const seekbg=useRef();
    const seekbar=useRef();

    const [track,settrack]=useState(songsData[0])
    const [playstatus,setplaystatus]=useState(false)
    const [time,settime]=useState({
        currenttime:{
            second:0,
            minute:0 
        },
        totaltime:{
            second:0,
            minute:0
        }
    })

    const play=()=>{
        audioref.current.play();
        setplaystatus(true)
    }

    const pause=()=>{
        audioref.current.pause();
        setplaystatus(false);
    }

    const playwithID=async (id)=>{
        await settrack(songsData[id]);
        await audioref.current.play();
        setplaystatus(true);
    }

    const previous=async ()=> {
        if(track.id>0)
            {
                await settrack(songsData[track.id-1]);
                await audioref.current.play();
                setplaystatus(true);
            }
    }

    const next=async ()=> {
        if(track.id<songsData.length-1)
            {
                await settrack(songsData[track.id+1]);
                await audioref.current.play();
                setplaystatus(true);
            }
    }

    const seeksong=async (e)=>{
        // console.log(e)
        audioref.current.currentTime=((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*audioref.current.duration)
    }

    useEffect(()=>{
        setTimeout(() => {
            audioref.current.ontimeupdate=()=>{
                seekbar.current.style.width=(Math.floor(audioref.current.currentTime/audioref.current.duration * 100))+"%";
                settime({
                    currenttime:{
                        second: Math.floor(audioref.current.currentTime%60),
                        minute: Math.floor(audioref.current.currentTime/60)
                    },
                    totaltime:{
                        second: Math.floor(audioref.current.duration%60),
                        minute: Math.floor(audioref.current.duration/60)
                    }
                })
            }
        }, 1000);
    },[audioref])

    const contextvalue={
        audioref,
        seekbar,
        seekbg,
        track,
        settrack,
        playstatus,
        setplaystatus,
        settime,
        time,
        play,pause,
        playwithID,
        previous,
        next,
        seeksong

    }

    return(
        <PlayerContext.Provider value={contextvalue}>
            {props.children}
        </PlayerContext.Provider>
    )
}






export default PlayerContextprovider
