const jsonStr = `{
    "name": "MS Dhoni",
    "age" : 38,
    "isMarried": true,
    "address":{
       "street": "ABC",
       "pin": 112233,
       "city": "Ranchi"
    },
    "hobbies": ["Biking", "Running", "Playing Cricket"],
    "drink": null
   }`;
   const msDhoni = JSON.parse(jsonStr);
   console.log(typeof jsonStr );
   console.log(typeof msDhoni );

   console.log(msDhoni);
   console.log(msDhoni.hobbies);
   console.log(msDhoni.age);

   const college = {
    name: "COEP College Pune",
    year: 1990,
    city: "Pune"
   }
   const str = JSON.stringify(college);
   console.log(typeof str);
   console.log(str);



const str1 = JSON.stringify(college);
console.log(str);

const msDhoni1 = JSON.parse(jsonStr);