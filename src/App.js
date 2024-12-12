import React, {useState} from 'react'
import './App.css';
import Buttons from './Buttons';
import Actions from './Actions';


function App() {

  const [state, setState] = useState({
    powerBtn : true,
    vol: 0.3,
    screen: '',
    bankBtn: false,
    smoothPianoKit: [
      {
      name: "Chord-1",
      letter:"Q", 
      src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" 
    },{
      name: "Chord-2",
      letter: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },{
      name: "Chord-3",
      letter: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },{
      name: "Shaker",
      letter: "A",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },{
      name: "Open-HH",
      letter: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },{
      name: "Closed-HH",
      letter: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },{
      name: "Punchy-Kick",
      letter: "Z",
      src:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },{
      name: "Side-Stick",
      letter: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },{
      name: "Snare",
      letter: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
    ],
    heaterKit: [
      {
      name: "Heater-1",
      letter:"Q", 
      src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" 
    },{
      name: "Heater-2",
      letter: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },{
      name: "Heater-3",
      letter: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },{
      name: "Heater-4",
      letter: "A",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },{
      name: "Clap",
      letter: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },{
      name: "Open-HH",
      letter: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },{
      name: "Kick-n'-Hat",
      letter: "Z",
      src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },{
      name: "Kick",
      letter: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },{
      name: "Closed-HH",
      letter: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
    ]
  })
  return (
    <div className="App">
      <Buttons st={state} stFun={setState}/>
      <Actions st={state} stFun={setState}/>
    </div>
  );
}

export default App;
