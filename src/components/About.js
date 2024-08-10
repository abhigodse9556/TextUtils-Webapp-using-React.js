import React from 'react'

export default function About(props) {
    
    return (
        <div className={`container my-3 py-2 bg-${props.mode}`}>
            <h1>Welcome to Textify</h1>
            <p>At <b>Textify</b>, we believe that text should work for you. Whether you're looking to transform your text into lowercase, uppercase, capitalized, or reversed formats, or simply need to clean up extra spaces, our easy-to-use tool is here to help. We even offer a feature to make your text speak out loud!</p>
            <p>Our mission is to provide a seamless and efficient experience for anyone who needs quick and accurate text transformations. Whether you're a student, professional, or just someone who loves playing with words, <b>Textify</b> is your go-to tool for all things text.</p>
            <h3>Key Features</h3>
            <div className={`accordion`} id="accordionExample">
                <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Text Conversion Made Simple
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Effortlessly convert your text into lowercase, uppercase, or capitalize each word with a single click. Whether you're formatting a document or tweaking a headline, our tool ensures that your text looks exactly how you need it.</strong>
                    </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Advanced Text Manipulation
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Transform your text with our advanced features like reversing the text or removing extra spaces. Perfect for developers, writers, or anyone who needs precise control over their content, our tool gives you the flexibility to format text exactly to your specifications.</strong>
                    </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Text-to-Speech
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Bring your text to life with our Text-to-Speech feature. Simply enter your text, and let our tool read it aloud for you. Ideal for proofreading, accessibility, or just having fun, this feature adds a whole new dimension to your text manipulation experience.</strong>
                    </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
                    <h2 className="accordion-header" id="headingFour">
                    <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                        Word and Character Count
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Stay on top of your writing with our instant word and character count feature. Whether you're crafting a tweet, an essay, or a blog post, know exactly how many words and characters are in your text with real-time updates as you type.</strong>
                    </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
                    <h2 className="accordion-header" id="headingFive">
                    <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        Reading Time Estimation
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Curious about how long it will take someone to read your text? Our tool provides an accurate average reading time based on your word count, helping you tailor your content for your audience.</strong>
                    </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
                    <h2 className="accordion-header" id="headingSix">
                    <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                        Live Text Preview
                    </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>See your changes in action with our live preview feature. As you transform your text—whether converting case, removing spaces, or reversing words—you can instantly view how the final version will look, making sure it meets your expectations.</strong>
                    </div>
                    </div>
                </div>
            </div>
            <p className='mt-3'>Thank you for choosing <b>Textify</b>. We’re excited to help you transform your text with ease!</p>
        </div>
    )
}
