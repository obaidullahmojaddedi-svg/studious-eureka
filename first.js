// let count = 0
// console.log(count)
// let myage = 21
// console.log(myage)

// let count = 5 * 6

// console.log(count)
// let firstbatch = 10
// let secbatch = 3
// let count = firstbatch + secbatch
// console.log(count)

// let myage = 21
// let dogage = 7
// let mydogage = myage * dogage
// console.log(mydogage)  
// let bounspoints = 50     
// console.log(bounspoints)
//  bounspoints = bounspoints + 50
//  console.log(bounspoints)
//  bounspoints = bounspoints - 75
//  console.log(bounspoints)
//  bounspoints = bounspoints + 45
//  console.log(bounspoints)


//  let countdown = 100
//  console.log(countdown) + 50

//   countdown =  countdown + 50
//   console.log(countdown)

//   countdown =  countdown - 100
//   console.log(countdown)

//   countdown =  countdown + 55


// function increment(){
//     console.log("The button was clicked")
// }

// create a function (you decide the name) that logs out the number 42 to console
// call/invoke the finction
// function mylogger(){
//     console.log(42)
// }
// mylogger()


// let lap1 = 30
// let lap2 = 40
// let lap3 = 44
// let lap4 = 48
// let lap5 = 55

// create a function that logs out the sum of all the lap time
// function laptime(){
//     let totallaptime = lap1 + lap2 + lap3 + lap4 + lap5
//     console.log(totallaptime)
// }
// laptime()

// let completed = 0
//  create a function that increments the lapscompleted variable with one
//   function increment(){
//     completed = completed + 1
//   }
//  increment()
//  increment()
//  increment()

//  console.log(completed)


// intialize the count as 0
// listen to clicks on the increment button
// increment the count variable when the button is clicked (log it out )
// change the count-el in the html to reflect the new count 

let saveEl = document.GetElementById("save-el")
console.log(saveEl)

// grab the count-el element, store it in a countEL variable 
let countEL = document.getElementById("count-el")
console.log(countEL)

let count = 0 
function increment(){
    count = count + 1
  //  set countEL's innertext to the count 
  countEL.innerText = count
}

function save(){
   let countStr = count + "-"
   saveEl.innertext += count
    console.log(count)
}
save()
