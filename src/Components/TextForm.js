import react, {useState} from "react"


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    
  
    const handleLowClick = ()=>{
         let newText = text.toLowerCase();
         setText(newText);
       //  console.log(newText);
       props.showAlert("Converted to LowerCase", "success");
     }
     
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value);

    }
 
    const handleCleartext = ()=>{
         let newText = "";
         setText(newText);
       //  console.log(newText);
       props.showAlert("TextSpace is cleared", "success");
     }

     const handleCopytext = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
     }


     const handleExtraSpaces = () =>
     {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("ExtraSpaces has been removed", "success")
     }
    const[text, setText] = useState('');
    // text = "new text"; // Remember It is wrong way to change the state
    // setText("new text");// It is the correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}  </h1>
            <div className="mb-3">
                <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowerCase </button>
            <button className="btn btn-primary mx-1" onClick={handleCleartext}>Clear the Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopytext}>Copy the Text</button>
            <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*(text.split(" ").length)} Minutes read</p>
            <h2>{text.length>0?text:"Enter something in the textbook to preview it here"}</h2>
            <p>{text}</p>

        </div>
        </>
    )
}



