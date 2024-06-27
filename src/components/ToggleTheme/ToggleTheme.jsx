import React,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/Context'

import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import '../ToggleTheme/FaToggleOn.css'
import '../ToggleTheme/FaToggleOff.css'

const ToggleTheme = () => {
    const {frttheme,setFrttheme,secTheme,setSectheme} =useGlobalContext();
    const [alternate,setAlternate] = useState(true);
    const toggleTheme =()=>{
        
        if(frttheme==="dark-theme"){
            setFrttheme("light-theme");
            setAlternate(false)
            
        }
        else{
            setFrttheme("dark-theme");
            setAlternate(true)
            
        }
        
    };
    useEffect(()=>{
        document.body.className=frttheme;
    },[frttheme]);
    useEffect(()=>{
        ()=>console.log("toggle button working");
    },[alternate]);
  return (
    <div>
        <Link to="" onClick={()=> toggleTheme()}>{alternate ?<FaToggleOn className='toggle-btn'/> :<FaToggleOff className='toggle-btn'/>} </Link>
    </div>
  )
}

export default ToggleTheme