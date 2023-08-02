
import './App.css';
import About from './Component/About';
import NAvbar from './Component/NAvbar';
import Textform from './Component/Textform';
import React, { useState } from 'react'
// import ProgressDisplay from './Component/ProgressDisplay';
import DialogueBox from './Component/DialogueBox';




function App() {
  
  const [mode, setMode] = useState('light')

  const togglemode=()=>{
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='#6c757d';
  }
    
  else
  {
    setMode('light');

    document.body.style.backgroundColor='white';
  }
   
  }
  return (
    <>   
    <NAvbar title = "Workday" title2 = "Info" mode={mode} toggle = {togglemode} />
    <div className="container"><Textform heading = "Enter the text here: "/></div>
    <div>
     <About/>
    </div>
    {/* <div>
       
      <ProgressDisplay/>
    </div> */}
   <div>
    <DialogueBox/>

   </div>
    </>   
  );
}

export default App;
    


