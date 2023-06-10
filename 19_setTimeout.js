console.log('---------setTimeout is in built Callback function  --------');

let display = function (){
    console.log("display");
}
// 1 sec = 1000 milli sec
setTimeout(display, 9000);

setTimeout( function(){
    console.log(100+100);
} , 5000);

setTimeout( ()=>{
    console.log(`Inside arrow function...`);
}, 3000);



