import React from 'react'
import "./Actions.css"




const Actions = (props) => {

  
  return (
    <div className='actions-div'>
      <h5>Power: {props.st.powerBtn?'ON':'OFF'}</h5>
      <div className='frame-switch' onClick={()=>props.stFun({
        ...props.st,
        powerBtn: !props.st.powerBtn}
      )} 
      style={{justifyContent: props.st.powerBtn?"end":"start"}}


      >
        <div className='switch' style={{backgroundColor: props.st.powerBtn?"green":"blue"}}></div>
      </div>

      <div className='message-screen'>{props.st.screen}</div>
      
      <input type='range' min={0} max={1} step={0.01} className='volume-bar' defaultValue={props.st.vol} onChange={(e)=>{
        props.stFun({
        ...props.st,
        vol: e.target.value,
        screen:`Volume: ${props.st.vol*100}`
        });
        
        setTimeout(() => {
          props.stFun({...props.st,screen:``})
        }, 2000);
      }}></input>

      <h5>Bank</h5>
      <div className='frame-switch' onClick={()=>{
        props.stFun({
          ...props.st,
          screen: props.st.bankBtn?'heater kit':'smooth piano kit',
          bankBtn: !props.st.bankBtn});
        }} 
        style={{justifyContent: props.st.bankBtn?"end":"start"}}
        >
        <div className='switch' style={{backgroundColor: props.st.bankBtn?"green":"blue"}}></div>
      </div>
    </div>
  )
}

export default Actions
