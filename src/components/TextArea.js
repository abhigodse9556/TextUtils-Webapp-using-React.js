import React, {useState} from 'react'

export default function TextArea(props) {
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const handleOnclick = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const [text, setText] = useState('Enter your text here')
    return (
        <div>
            <div className="mb-3">
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" value={text} onChange={handleOnchange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnclick}>Convert to Upper Case</button>
        </div>
    )
}
