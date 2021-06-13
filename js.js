"use strict"
document.addEventListener("DOMContentLoaded", ()=>{
    const slides=document.querySelectorAll(".slide")
    slides.forEach(slide=>{
        slide.addEventListener('click', (e)=>{
            clearActiveClasses()
            e.target.classList.add("active")
        })
    })
    const clearActiveClasses=()=>{
        slides.forEach(i=>{
            i.classList.remove("active")
        })
    }
})