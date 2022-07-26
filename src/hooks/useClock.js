import {useEffect, useState} from 'react';

function getTime(date){
    
    const hours= `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)
    return `${hours} : ${minutes} : ${seconds}`
}
function useClock() {
    const [timeString,setTimeString]=useState(()=>getTime(new Date()))
    useEffect(()=>{
       
       let intervalId= setInterval(()=>{
            const now=new Date();
            const timeNow=getTime(now);
            setTimeString(timeNow)
        },1000)

        return ()=>clearInterval(intervalId)

    },[])
    return {timeString}
}
export default useClock