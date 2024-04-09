import { useEffect, useState } from 'react';
import './App.css';
import { data } from './data';
import gsap from 'gsap';

function App() {

  const [showText,setShowText]=useState(false);

  useEffect(() => {
    gsap.from('.TextPosition', {
      duration: 1,
    opacity:1,
   
   delay:0.6,
    });
      
  }, []);


const showTextClick = (item) => {
    item.showMore=!item.showMore
    setShowText(!showText)
  };


  
  

  return (
    <div className="Container">
     {data.map((item) => {
      const { id,header, text, showMore } = item;
      return (
        <div className="TextPosition"key={id}>
         <p className="header">{showMore ? header : header.substring(0, 15) }<button className="button-pointer"onClick={()=>showTextClick(item)}>{showMore ?<span className="small-text">...show less</span> : "..."}</button></p>
         <p className="text">{text}</p>
        </div>
      )
    })}
  </div>
    
  );
}

export default App;
