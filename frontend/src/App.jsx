//Dependências e bibliotecas
import React from 'react'
//Components
import Home from './pages/Home'
//assets & CSS
import './assets/styles/global.css'

const App = () => {
  var [variavel,funcao] = React.useState("mamaco")

  function teste ( ) {
    if (variavel==="prego"){
      funcao("mamaco")
    }
    else {
      funcao("prego")
    }
  }
  
  return (
   
    <div>
      <Home/>
      <p style={{background:"red"}}>{variavel}</p>
      <button onClick={()=>{teste()}}>AAAAAAAAAAAAAA</button>
    </div>
  )
}

export default App
