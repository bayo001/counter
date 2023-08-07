// document.getElementById("count-el").innerText = 3



let countEL =  document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0

function increament() {
        count +=  1
        countEL.textContent = count 
}

function save() {
    let countStr = count +  " - "
    
    saveEL.textContent += countStr
    countEL.textContent = 0
    count = 0

}






   