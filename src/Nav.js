import React, {useState,useEffect}from 'react'
import netflix from './netflix.PNG'
import './Nav.css'

const Nav = () => {
    const [show, setShow] = useState(false)
    useEffect(()=>{
       window.addEventListener('scroll',()=>{
           if(window.scrollY > 100){
               setShow(true)
           }else{
               setShow(false)
           }
       })
       return ()=>{
           window.removeEventListener('scroll')
       }
    },[])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img src={netflix} alt='netflix-logo' className='nav__logo' />
            <img 
            className='nav__avatar'
            style={{backgroundColor:'#fff'}}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAqklEQVRIie2UQRGEMBAEW0IknAQkICFSTgIOTkoknAQkICES4JHkl2S32L0XN1XzoYpplmwGnqIF+AA7cAAJeHmFRyADZ8fRGh4oX90LPys4WADrJNxlircCsFkAUQEwTRAoW/OzM4DxFBmHLWpaKLufq7/12cMVKGua6F+2VhnbnfB1EDryXt9Rh4+6R7IIkbpHcpYAmmowVUdyAKQZYFYLLr/JGt78l14XEWq13WwIUX0AAAAASUVORK5CYII="/>
            </div>
    )
}

export default Nav
