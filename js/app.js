////جاوااسکریپت خام 

const slider = document.querySelector('.slider')
let arrayslider = [...slider.children];
const dotes = document.querySelector(".dotes")
const next = document.querySelector('.next')
const prev = document.querySelector('.prev') 
let dote  =[]
arrayslider.forEach(()=>{
    const dote = document.createElement('div')
    dote.classList="dote bg-green-800 rounded-full w-5 h-5 cursor-pointer m-1"
    dotes.append(dote)
})

const doteindex = document.querySelectorAll(".dote")

const arraydote = [...doteindex]

let i = 0

arraydote.forEach((item , index)=>{
    item.addEventListener('click' , ()=>{   
        arrayslider[i].classList.add('hidden')
        arraydote[i].classList.remove('bg-green-300')
        i = index
        arraydote[index].classList.add('bg-green-300')
        arrayslider[index].classList.remove('hidden')
    })
 })

next.addEventListener('click' , ()=>{
    arrayslider[i].classList.add('hidden')
    arraydote[i].classList.remove('bg-green-300')
    i = i+1 
    if (i == arrayslider.length) {
        i = 0
    }
    arrayslider[i].classList.remove('hidden')
    arraydote[i].classList.add('bg-green-300')
})
prev.addEventListener('click' , ()=>{
   if(i > 0 ){
    arrayslider[i].classList.add('hidden')
    arraydote[i].classList.remove('bg-green-300')
    i = i-1 
    if (i == arrayslider.length) {
        i = 0
    }
    arrayslider[i].classList.remove('hidden')
    arraydote[i].classList.add('bg-slate-600')
   }
   else{}
})