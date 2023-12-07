"use strict";
const id = document.querySelector('.advice-id');
const content = document.querySelector('.advice-content');
const parentCon = document.querySelector('.advice-con');
const adBtn = document.querySelector('.advice-btn');



const GenerateAdvice = async function() {
    try{
        const res = await fetch("https://api.adviceslip.com/advice");
        console.log(res)
        if(!res.ok) throw new Error('problem getting data')
        const data = await res.json()
       
    
        id.textContent = `ADVICE # ${data.slip.id}`;
        content.textContent = `" ${data.slip.advice} "`
    }
    catch(err){
        id.textContent = ''
        content.textContent = `${err.message}`
    }

}

adBtn.addEventListener('click', GenerateAdvice)