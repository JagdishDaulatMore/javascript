const elementPersonal = document.getElementById("personal");
console.log(elementPersonal.innerHTML);

const elementNameByClass = document.getElementsByClassName("name");
console.log(elementNameByClass[0].innerHTML);

const elementH3 = document.querySelectorAll("p")
console.log(elementH3[0].innerHTML);


// querySelectorAll
// querySelector

const elementPer = document.querySelector('#personal');
console.log(elementPer.innerHTML);

const elementName = document.querySelector(".name");
console.log(elementName.innerHTML);

const elementH3Contact = document.querySelector("h3");
console.log(elementH3Contact.innerHTML);

console.log("======== .querySelectorAll('p') ");

const elementsPara = document.querySelectorAll('p');
for (const element of elementsPara) {
    console.log(element.innerHTML);
}

console.log(`======== document.querySelectorAll(".ceo")`);
const elementsCeo = document.querySelectorAll(".ceo")
elementsCeo.forEach( (element)=>{
    console.log(element.innerHTML);
} );

