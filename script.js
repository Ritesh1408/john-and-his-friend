/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item, i) => {
    if(item.profession == "developer")
      console.log(`ID : ${item.id}, Name : ${item.name}, Age: ${item.age}, Profession : ${item.profession}`)
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {
    if(item.profession.toLowerCase() === "developer")
      console.log(`ID : ${item.id}, Name : ${item.name}, Age: ${item.age}, Profession : ${item.profession}`)
    }
  );
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:"susan", age:"20", profession:"intern"});
  arr.map((item, i) => 
    console.log(`ID : ${item.id}, Name : ${item.name}, Age: ${item.age}, Profession : ${item.profession}`)
  );
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((item, i) => {
    if(item.profession !== "admin"){
      console.log(`ID : ${item.id}, Name : ${item.name}, Age: ${item.age}, Profession : ${item.profession}`)
    }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "john Wick", age: "44", profession: "Actor" },
    { id: 5, name: "jack dorsey", age: "55", profession: "Engineer" },
    { id: 6, name: "karin uzumaki", age: "22", profession: "Ninja - A Naruto Character" }
  ];

  arr = arr.concat(arr1);
  arr.map((item, i) => {
      console.log(`ID : ${item.id}, Name : ${item.name}, Age: ${item.age}, Profession : ${item.profession}`)
  });
}
