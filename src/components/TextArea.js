import React, {useState} from 'react'

export default function TextArea(props) {
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const handleOnclickUpper = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleOnclickLower = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const [text, setText] = useState('Enter your text here')
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1 className='my-3'>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" value={text} onChange={handleOnchange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleOnclickUpper}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleOnclickLower}>Convert to Lower Case</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <h4>Word-Char Counter</h4>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h4>Average time required to read your text</h4>
                <p>{(text.split(" ").length) * 0.008} Minutes</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}
