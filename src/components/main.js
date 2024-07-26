import React from 'react'

export default function main() {
    const handleLightTheme = () => {
        document.querySelector('body').style.backgroundColor = "white"
        document.querySelector('body').style.color = "black"
        let navbar = document.querySelector('.navbar')
        navbar.classList.add('bg-body-tertiary')
        let darkbtn = document.querySelector('#dark-btn')
        darkbtn.classList.add('active')
        let lightbtn = document.querySelector('#light-btn')
        lightbtn.classList.remove('active')
    }
    
    const handleDarkTheme = () => {
        document.querySelector('body').style.backgroundColor = "#000000cc"
        document.querySelector('body').style.color = "white"
        let navbar = document.querySelector('.navbar')
        navbar.classList.remove('bg-body-tertiary')
        let darkbtn = document.querySelector('#dark-btn')
        darkbtn.classList.remove('active')
        let lightbtn = document.querySelector('#light-btn')
        lightbtn.classList.add('active')
    }
    return (
        <>
            <button id='dark-btn' className='theme-btn active' onClick={handleDarkTheme}><i class="bi bi-moon-fill"></i></button>
            <button id='light-btn' className='theme-btn' onClick={handleLightTheme}><i class="bi bi-moon-fill"></i></button>
        </>
    )
}
