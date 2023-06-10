let isNotesPrepared = false;
let promise = new Promise( (resolve, reject) =>{
// I got a time at 4.30
    if (isNotesPrepared) {
        resolve("Guys, please take this notes");
    }else{
        reject("Sorry, I didn't get time...."); 
    }
} );
promise.then(success =>{
    console.log(success);
}).catch(reject=>{
    console.log(reject);
} ).finally(() =>{
    console.log("I should have notes..");
})



