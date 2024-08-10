import React, { useEffect, useState } from 'react';

function Alert(props) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (props.alert) {
            // Automatically fade out the alert after 1.5 seconds (match the progress bar animation)
            const timer = setTimeout(() => setFadeOut(true), 3000);

            // Reset fade out state when a new alert is shown
            return () => {
                clearTimeout(timer);
                setFadeOut(false);
            };
        }
    }, [props.alert]);

    return (
        props.alert && 
        <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show ${fadeOut ? 'fade-out' : ''}`} role="alert">
            <strong><i className="bi bi-check2-square" style={{fontSize:'20px'}}></i></strong> {props.alert.msg}
            <div className="progress-bar"></div>
        </div>
    );
}

export default Alert;
