import {useEffect,useState,useRef} from 'react'

function getRandomColor(currentColor) {
    const colors= ['red','green','blue','yellow','black','deeppink','violet']
    const currentIndex=colors.findIndex((color)=>color===currentColor)
    let newIndex =Math.trunc(Math.random() * colors.length)
    while(currentIndex===newIndex){
        newIndex =Math.trunc(Math.random() * colors.length)
    }
    return colors[newIndex]
}

function useMagicColor(){
    const [color,setColor]=useState('transparent')
   const currentColor=useRef('transparent')
    useEffect(() => {
      const intervalId=  setInterval(() =>{
        const newColor=getRandomColor(currentColor.current)
        setColor(newColor)
        currentColor.current=newColor
        },1000)
        return () => clearInterval(intervalId)
    },[])

    return {color}
}
export default useMagicColor