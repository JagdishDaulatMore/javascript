// 1 to 10
for (let index = 1; index <= 10; index++) {// index = 0  1
    console.log(`${index}`); // 0  1
    // index == 5
    if (index==5) {
        break;
    }
}
console.log(`End loop`);


// 1 to 10
var iteration = 0;
for (let index = 1; index <= 10; index++) {// index = 0  1
    iteration = iteration + 1;
    console.log(`Iteration start: ${iteration}`);
    console.log(`${index}`); // 0  1
    // index == 5
    if (index==5) {
        continue;
    }
    console.log(`Iteration End: ${iteration}`);
}
console.log(`End loop`);

