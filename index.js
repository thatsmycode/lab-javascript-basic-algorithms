// Iteration 1: Names and Input
let hacker1 = "amarc";
console.log(`The driver\'s name is ${hacker1}`);

let hacker2 = "amarc";
console.log(`The navigator\'s name is ${hacker2}`)

// Iteration 2: Conditionals
let arrayNames = [hacker1,hacker2];
let longName;
let initialLength = 0;
let sameLenght= false;
for (let i = 0; i <2; i++){
    if (arrayNames[i].length === initialLength){
        sameLenght = true;
    }
    else if (arrayNames[i].length > initialLength){
        initialLength = arrayNames[i].length;
        longName = arrayNames[i];
    }
}


if(longName === hacker1 && sameLenght == false){
    console.log(`The driver has the longest name, it has ${initialLength} characters`);
}else if(longName === hacker2 && sameLenght == false) {
    console.log(`The navigator has the longest name, it has ${initialLength} characters`);
}
else if(sameLenght){
    console.log(`Wow, you both have equally long names, ${initialLength} characters!`);
}

// Iteration 3: Loops

let result ="";
for(const letter of hacker1.toUpperCase()){
    result += " " + letter;
}
console.log(result)

let secondResult= "";
for (let i = hacker2.length -1 ; i >= 0; i--){
    secondResult+=  hacker2[i];
}
console.log(secondResult);

let first = false;

for (let i = 0; i < hacker1.length; i++){

    for (let j = 0; j < hacker2.length; i++){
        if(hacker1[i] < hacker2[j]){
            console.log("The driver's name goes first");
            i = hacker1.length;
            first = true;
        }
        else if(hacker1[i] > hacker2[j]){
            console.log("Yo, the navigator goes first, definetely");
            i= hacker1.length;
            first = true;
        }
    }
}
if (!first){
    console.log("What?! You both have the same name?");
}
