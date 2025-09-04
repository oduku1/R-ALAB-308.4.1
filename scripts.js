//part 2

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let value = "";
let row = [];
let table = [];

for (let i = 0; i < csv.length; i++) {
    let char = csv[i];
    if (char === ",") {
        row.push(value);
        value = ""; // reset for next cell
    } 
    else if (char === "\n") {
        row.push(value);
        table.push(row);
        row = [];
        value = "";
    } 
    else {
        value += char;
    }
}

console.log(table)
/*----------------------------------------------------------------------------*/
//part 3
 

let keys = table[0].map(h => h.toLowerCase());
let objects = []

for(let i = 1; i < table.length; i++){
    let row = table[i]
    let obj = {}
    for(let j = 0; j < keys.length;j++){
        obj[keys[j]]= row[j]
    }
    objects.push(obj)
}

//console.log(objects)


//part4

newObj = [...objects]
console.log(newObj)
newObj.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });
newObj.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })



let total_age = 0; 

for(let i = 0; i < newObj.length; i++){
    total_age+= parseInt(newObj[i].age)
}
let average_age = total_age / newObj.length; 
//console.log(average_age)

/*----------------------------------------------------------------------------*/
//part 5 
console.log(Object.keys(newObj[0]))
let csv_2 = []

let headers = Object.keys(newObj[0]);   // ✅ define headers
// Capitalize first letter so it matches "ID,Name,Occupation,Age"
csv_2.push(headers.map(h => h.charAt(0).toUpperCase() + h.slice(1)).join(","))
console.log(headers.join(","))

for (let i = 0; i < newObj.length; i++) {
    let stringArr = [];
    for (let j = 0; j < headers.length; j++) {
      let key = headers[j];
      stringArr.push(newObj[i][key]);
    }
    csv_2.push(stringArr.join(","));
}
console.log(csv_2)

/*----------------------------------------------------------------------------*/