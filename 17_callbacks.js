console.log(`Callback using named Function `);
// Avinash --
function assignment(callbackFun){
    console.log("Start: Assignments solving");
    console.log("Took 3 hours");
    console.log("Complete : Assignments solving ");
    callbackFun();
}
// Mangesh
function copyAssignment(){
    console.log(`Start copying`);
    console.log(`Took 15 mins to copy`);
    console.log(`Complete assignments`);
}

assignment(copyAssignment);


console.log(`Callback using Function Expression`);
// Avinash --
let doHomeWork = function(callback){
    console.log("Start: Assignments solving");
    console.log("Took 3 hours");
    console.log("Complete : Assignments solving ");
    callback();
}
// Mangesh
let copyHomeWork = function(){
    console.log(`Start copying`);
    console.log(`Took 15 mins to copy`);
    console.log(`Complete assignments`);
}
doHomeWork(copyHomeWork);



