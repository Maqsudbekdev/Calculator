let ac = document.querySelector(".ac")
let square = document.querySelector(".square")
let c = document.querySelector(".c")

ac.addEventListener('click',(e)=>{
    e.preventDefault()
    result.value = ""
})
// c.addEventListener('click',(e)=>{
//     e.preventDefault()
    
//     result.value = result.value.slice(0,-1)
// })

square.addEventListener('click',(e)=>{
    e.preventDefault()
    result.value = result.value**2
})
