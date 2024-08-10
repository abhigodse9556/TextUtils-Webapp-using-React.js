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
        document.getSelection().removeAllRanges()
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
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className='my-3'>{props.heading}</h1>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="textBox" rows="15" value={text} onChange={handleOnchange} placeholder='Enter your text here'></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclickUpper}><i className="bi bi-alphabet-uppercase"></i> Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclickLower}><i className="bi bi-alphabet"></i> Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 capBtn" onClick={handleOnclickCapitalize}><div className='capIcon'><strong style={{fontSize: '9px', paddingBottom: '5px'}}>Abc</strong></div> Capitalize</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclickReverse}><i className="bi bi-repeat"></i> Reverse</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclickSpeak}><i className="bi bi-megaphone-fill"></i> Speak</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}><i className="bi bi-x-octagon"></i> Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}><i className="bi bi-copy"></i> Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclickClear}><i className="bi bi-eraser"></i> Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <h4>Word-Char Counter</h4>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <h4>Average time required to read your text</h4>
                <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length) * 0.008} Minutes</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:'Nothing to preview!'}</p>
            </div>
        </>
    )
}
