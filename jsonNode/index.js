const bioData = {
    name : "asad",
    age : 27,
    college : "GC uni"
};
// console.log(bioData.college);

// If convert objec into JSON then,
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// if convert JSON data into object then,
const jsonObj = JSON.parse(jsonData);
console.log(jsonObj);
console.log(jsonObj.college);