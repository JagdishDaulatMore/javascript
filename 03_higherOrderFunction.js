function hello(callback) {
    console.log("Hello");
    callback();
    let ques = function(){
        console.log("How are you ?");
    }
    return ques;
}

let greet = function(){
    console.log("Good Morning.. ");
}
let answer = hello(greet);
answer();


