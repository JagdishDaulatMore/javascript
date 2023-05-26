let map = new Map();
console.log(typeof map);

// Key : Roll Number , Value : Student Name
map.set(11, "Ram");
map.set(22, "Shyam");
map.set(33, "Siya");
map.set(44, "Jenny");

const mapSize = map.size;
console.log(`Map size ${mapSize}`);

// Retrieve the value using key
const valueOfKey22 = map.get(22);
console.log(` Value of Key 22 is ${valueOfKey22}`);


// Retrieve the value using key but that key doesn't exists
const valueOfKey99 = map.get(99);
console.log(` Value of Key 99 is ${valueOfKey99}`);

// Adding duplicate key
map.set(33, "Billgates");

// Adding duplicate value
map.set(55, "Jenny")

// Delete entry
map.delete(22);

// Key is exists or not
const isAvailable = map.has(44);
console.log(`Iss 44 key Available: ${isAvailable}`);

const keys = map.keys();
console.log(keys);

const values = map.values();
console.log(values);

console.log("Traversing map");
const keysOfMap = map.keys();
for (const key of keysOfMap) { // 11
    const value = map.get(key);
    console.log(`${key} ${value}`);
}

console.log(map);
console.table(map);


