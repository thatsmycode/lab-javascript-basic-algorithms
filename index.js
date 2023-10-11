// Iteration 1: Names and Input
let hacker1 = "marc";
console.log(`The driver\'s name is ${hacker1}`);

let hacker2 = "ramon";
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
let minLength = Math.min(hacker1.length, hacker2.length);

for (let i = 0; i < minLength; i++){
    if (hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first");
        first = true;  
        i = minLength;
    }
    else if(hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first, definetely");
        first = true;    
        i = minLength;
    }   
}
if (!first){
    if (hacker1.length < hacker2.length){
        console.log("The driver's name goes first");
    }else if(hacker1.length > hacker2.length){
        console.log("Yo, the navigator goes first, definetely");
    }
    else{
        console.log("What?! You both have the same name?");
    }
}


//BONUS:
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget sapien mauris. Duis sit amet maximus lacus, sit amet dictum augue. Morbi non leo lectus. Quisque justo neque, sagittis eu ex eget, fermentum vehicula est. Nunc eu libero feugiat, suscipit nisi sed, scelerisque leo. Aliquam ac blandit enim. Duis mattis facilisis ex ac sollicitudin. Aliquam aliquam, justo nec vestibulum luctus, ex dolor viverra dui, ac egestas purus turpis et mi. Maecenas vulputate quam sed nisl gravida, in ultricies nunc tincidunt. Proin id sollicitudin turpis. Cras ac laoreet leo. Aenean bibendum bibendum lorem. Nam mi velit, finibus sit amet nibh et, auctor sollicitudin enim. Proin nulla sem, facilisis nec mauris venenatis, ultricies malesuada mauris. Morbi eu justo quis sapien vehicula pretium. Donec a ex sit amet eros sagittis congue eu elementum diam. Aliquam erat volutpat. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Integer dignissim nisi et accumsan maximus. Pellentesque quis urna vehicula dolor vestibulum tristique eget vel odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In molestie porttitor velit, ut auctor diam mollis a. Sed sed lectus lacinia, elementum urna ac, rutrum neque. Morbi eleifend dolor justo, ac semper elit accumsan et. Pellentesque nec est vel tellus porta porta eget at ligula.";
let wordsArray =[];
wordsArray =longText.split(' ');

console.log(`The number of words in the 3 paragraphs is: ${wordsArray.length}`);


let counter = 0;
for( const paraula of wordsArray){
    if ( paraula.startsWith("et")){
        if(paraula.length === 2){
        counter++;
        }
    }
}
console.log(`The word \"et\" appears ${counter} times.`);


//BONUS 2:
let phraseToCheck = Amor;

let lower = phraseToCheck.toLowerCase();

//taking out spaces
let newword ="";
for (const letter of lower){
    if( letter !== " "){
        newword+= letter;
    }
}
//reversing
let lowerReversed = "";

for (let i = newword.length -1 ; i >=0 ; i--){
    lowerReversed += newword[i];
}
//comparing
if (newword === lowerReversed){
    console.log(phraseToCheck+ " is a palindrome!")
}
