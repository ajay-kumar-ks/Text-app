import React, {useState} from 'react'
// import PropTypes from 'prop-types';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case!", "success");
  }
  const handleLowClick = ()=>{
    console.log("lower case was clicked " + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to lower case!", "success");

  }
  const handlecopy = ()=>{
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    //               OR
    navigator.clipboard.writeText(text);
    props.showAlert("Text copyed!", "success");

  }
  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");

  }
  
  const handleClear= ()=>{
   
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");

  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
          <h2>{props.heading}</h2>
          <div className="mb-3">
            
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor : props.mode==='dark'?'#13466e':'white' , color : props.mode==='dark'?'white':'black'}} rows="8" onChange={handleOnChange}></textarea>
           </div>
           <button className='btn btn-primary mx-1 my-1 ' onClick={handleUpClick}>covert to upper case</button>
           <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>covert to Lower case</button>
           <button className='btn btn-primary mx-1 my-1' onClick={handleClear}>clear text</button>
           <button className='btn btn-primary mx-1 my-1' onClick={handlecopy}>copy text</button>
           <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove blang space</button>
    </div>
    <div className='container py-3' style={{color : props.mode==='dark'?'white':'black'}}>
      <h2>your text summary</h2>
    
     <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.split(/[ ]+/).join(" ").length} charecters</p>


     <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minites read</p>
     <h3>privew</h3>
     <p>{text.length>0?text:"Enter something in the text box to preview"}</p>
    </div>
    </>
  )
}
