let isNotesPrepared = false;
let promise = new Promise( function(resolve, reject){
// I got a time at 4.30
    if (isNotesPrepared) {
        resolve("Guys, please take this notes");
    }else{
        reject("Sorry, I didn't get time...."); 
    }
} );
promise.then(function resolve(success){
    console.log(success);
}).catch(function reject(reject){
    console.log(reject);
} ).finally(function(){
    console.log("I should have notes..");
})



