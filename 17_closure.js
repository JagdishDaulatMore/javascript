var n1 = 100
function outerFun(){
    let n2 = 200;
    let innerFun = function() {
        let n3 = 300;
        console.log(`Global variable n1 ${n1}`);
        console.log(`Outer Function variable n2 ${n2}`);
        console.log(`Inner Function variable n3 ${n3}`);
    }
    return innerFun;
}
let inner = outerFun();
inner();
// outerFun()();





