import React from 'react'
import './Buttons.css'

const Buttons = (props) => {

  function playSound(ev){
    console.log(ev.target.children[0].className)
    if(props.st.powerBtn){
      document.getElementById(ev.target.name).volume = props.st.vol;
      document.getElementById(ev.target.name).play()
      props.stFun({
        ...props.st,
        screen: ev.target.children[0].className
      })
    }
  }

  // got from https://stackoverflow.com/questions/40091000/simulate-click-event-on-react-element

  document.addEventListener("keypress",(e)=>{
    if(props.st.smoothPianoKit.map(e=>e.letter).includes(e.key.toUpperCase())){
      document.querySelectorAll("button")[props.st.smoothPianoKit.map(e=>e.letter).indexOf(e.key.toUpperCase())].dispatchEvent(
        new MouseEvent('click',{bubbles:true})
      )
      
    }else{
      return
    }
  })
  return (
    <div className='buttons-div'>
      {props.st.bankBtn?
          props.st.smoothPianoKit.map(e=><button key={props.st.smoothPianoKit.indexOf(e)+1} onClick={playSound} name={e.letter}>
          {props.st.powerBtn&&<audio src={e.src} className={e.name} id={e.letter}></audio>}
          {e.letter}</button>)
          :
          props.st.heaterKit.map(e=><button key={props.st.heaterKit.indexOf(e)+1} onClick={playSound} name={e.letter}>
          {props.st.powerBtn&&<audio src={e.src} className={e.name} id={e.letter}></audio>}
          {e.letter}</button>)
      }
    </div>
  )
}

export default Buttons
