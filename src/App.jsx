import './App.css'
import { useState } from 'react'
import phrases from './phrases.json'
import {bgr1,bgr2,bgr3,bgr4} from './imagenes'

function getrandom(arr){
  return Math.floor(Math.random() * arr.length)
}
 const todas = [bgr1,bgr2,bgr3,bgr4]
 
 function App() {
   const [phrasee, setPhrase] = useState(phrases[getrandom(phrases)].phrase) 
   const [bgColor, setBgColor] = useState(todas[getrandom(todas)])
   
   const handleClick = ()=>{
     setPhrase(phrases[getrandom(phrases)].phrase) 
     setBgColor(todas[getrandom(todas)])
    }

    const img = `url('${bgColor}')`

  return (
    <div className='conteinerAll' style={{backgroundImage:img}}> 
      <div className='conteiner' >
       <h1 className='tittle'>Galletitas De La Suerte</h1>
       <div className='hola'>
     
<div class="cookie-card">
    <span class="title">🍪 RUEDA DE LA SUERTE 🍪</span>
    <p class="description">{phrasee} </p>
  
</div>
       </div>
<div class="container">
  <a href="#" class="button type--C">
    <div class="button__line"></div>
    <div class="button__line"></div>
    <span class="button__text" onClick={()=>{handleClick()}}>Ver Otra Frase</span>
    <div class="button__drow1"></div>
    <div class="button__drow2"></div>
  </a>
</div>

      </div>
      </div>
     
    
  )
}

export default App