const number = document.getElementById("number");
const btn = document.getElementById("btn");
const maxInput = document.getElementById("maxInput");
const minInput = document.getElementById("minInput");
const err = document.getElementById('err')

btn.addEventListener('click' , ()=>{

  const min = Number(minInput.value)
  const max = Number(maxInput.value)

  if(!min || !max){
    err.innerHTML = "Please Fill Both Fields"
    return
  }

  err.innerHTML = ""
  const randomNumber = Math.floor((Math.random() * ((max + 1)-min) + min))
  number.innerHTML = randomNumber
})