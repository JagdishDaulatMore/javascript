const array = [2, 3, 5,  6,  7,  9 ];
// const arrayTransformed = [4, 9, 25, 36, 49, 81 ];
const arrayTransformed= [];
array.forEach( (element)=> {
    arrayTransformed.push(element*element);
});
console.log(arrayTransformed);
console.log("======== using map()  ========");
const arrayTrans = array.map( (element) => {
    return element*element;
} );
console.log(arrayTrans);



