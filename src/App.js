import './App.css';
import { MdMic } from "react-icons/md";
import { MdMicOff } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useRef, useState } from 'react';


function App() {

  const refElement = useRef("");
  const refEle = useRef("");
  // const [listen,setlisten] = useState(SpeechRecognition);

  const {transcript} = useSpeechRecognition();


  function Handleclickon() {
    SpeechRecognition.startListening();
      console.log("We are listening. Try speaking into the microphone.");
      refElement.current.innerText = '' ;
      refEle.current.innerText = "Listening, please speak...";
  }

  function Handleclickoff() {
    SpeechRecognition.stopListening();
    console.log("Stopped listening, hope you are done...");
    refEle.current.innerText = "Stopped listening, hope you are done...";
    refElement.current.innerText = transcript
  }

  return (
    <div className='main'>
    <textarea name="" id="text" cols="30" rows="10"  ref={refElement}></textarea>
      <div className='buttn_div'>
        <button className="btn" type="button" onClick={Handleclickon}><i><MdMic size={26}/></i></button>
        <button className="btn" type="button" onClick={Handleclickoff}><i><MdMicOff size={26}/></i></button>
      </div>
    <span id="action" ref={refEle}>Made with&nbsp;<MdFavorite color="red"/>&nbsp;by Utkarsh</span>
    </div>    
  );
}

export default App;
