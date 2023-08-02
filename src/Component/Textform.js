
import React,{useState}from 'react'



export default function Textform(props) {
  
  const [text, setText] = useState("");
 
  const handleUpclick = ()=>{
    console.log("button was clicked");
    let newtext = text.toLocaleUpperCase();
     setText(newtext)
  }

  const handleOnchange = (Event)=>{
    console.log("Onclick");
    setText(Event.target.value)
  }

  const handleLoclick=()=>{
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
  }
  
  
  return (
    <>
    <div className = "container">
    <div className="mb-3">
   
    <label htmlFor="myBox" className="form-label">{props.heading}</label>

    <textarea className="form-control" value = {text} onChange={handleOnchange} id="myBox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpclick}>Convert to Upper Case:</button>
    <button className="btn btn-primary mx-3" onClick={handleLoclick}>Convert to Lower Case:</button>
    </div>

    <div className="container my-3">
      <h5>Here is the word count:</h5>
      <p> the number of characters {text.length} and thenumber of words is {text.split(" ").length}</p>
    </div>

    </>

  )
}
 

