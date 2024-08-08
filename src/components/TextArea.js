import React, {useState} from 'react'

export default function TextArea(props) {
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const handleOnclickUpper = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleOnclickLower = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleOnclickCapitalize = () => {
        let text1 = text.toLowerCase()
        let newText = text1.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalize!", "success")
    }
    const handleOnclickReverse = () => {
        let str="";
        for (let index = text.length-1; index >=0; index--) {
        str+= text[index];
        }
        props.showAlert("Your Text is Reversed!", "success")
        return setText(str);
    }
    const handleOnclickSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking started!", "success")
        msg.onend = () => {
            props.showAlert("Speaking completed!", "success");
        }
    }
    const handleCopy = () => {
        let txt = document.getElementById('textBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Text is Copied to Clipboard!", "success")
    }
    const handleExtraSpaces = () => {
        let txt = text.split(/[ ]+/)
        setText(txt.join(" "))
        props.showAlert("Extra Spaces have been removed!", "success")
    }
    const handleOnclickClear = ()=>{
        let newtext = ""
        setText(newtext)
        props.showAlert("Text Cleared!", "success")
    }
    const [text, setText] = useState('')
    let myStyle = {
        backgroundColor: 'white',
        color: "black"
    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className='my-3'>{props.heading}</h1>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="textBox" rows="15" value={text} onChange={handleOnchange} placeholder='Enter your text here' style={myStyle}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleOnclickUpper}>Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleOnclickLower}>Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleOnclickCapitalize}>Capitalize</button>
                <button className="btn btn-primary mx-1" onClick={handleOnclickReverse}>Reverse</button>
                <button className="btn btn-primary mx-1" onClick={handleOnclickSpeak}>Speak</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-1" onClick={handleOnclickClear}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <h4>Word-Char Counter</h4>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h4>Average time required to read your text</h4>
                <p>{(text.split(" ").length) * 0.008} Minutes</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:'Enter something in the text box above to preview it here'}</p>
            </div>
        </>
    )
}
