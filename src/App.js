import './App.css';
import { MdMicNone } from "react-icons/md";


function App() {
  return (
    <div>
    <textarea name="" id="text" cols="30" rows="10"></textarea>
        <button class="btn" type="button">
            <i><MdMicNone /></i>
        </button>
        <span id="action"></span>
    </div>    
  );
}

export default App;
