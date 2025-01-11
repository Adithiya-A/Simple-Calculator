let display = document.getElementById("output");
let allClear = document.getElementById("clear");
let del = document.getElementById("delete");
let equal = document.querySelector(".equal");

// Event Listeners


allClear.addEventListener("click", function(){
    display.value = "";
})

del.addEventListener("click", function(){
    display.value = display.value.slice(0, -1);
})

equal.addEventListener("click", function(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
})



// OnClick Functions

 function input(num){
     display.value += num;
 }

// function equal(){
//    try {
//      display.value = eval(display.value);
//    } catch (error) {
//     display.value = "Error";
//    }
// }

// function allClear(){
//     display.value = "";
// }

// function del(){
//     display.value = display.value.slice(0, -1);
// }

