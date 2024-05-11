// Question: 1 Install Node>js, Typescript and VS Code on your Laptop.

// Q 2:

let Name: string = "Faiq";

console.log(`Hello ${Name}, Would you like some Typescript today?`)


// Q 3:
let nAme : string = "Faiq";

console.log(nAme.toLowerCase());
console.log(nAme.toUpperCase());
console.log(nAme.charAt(0).toUpperCase() + nAme.slice(1).toLowerCase());



// Q 4:

console.log(`Albert Einstin once said, "A person who never made a mistak never tried 
anything new."`);


// Q 5:
 
let famous_person: string = "Albert Einstin";

let message : string = `${famous_person}, once said, "A person who never made mistak never tried
anything new."`;

console.log(message);

// Q 6:

let myName: string = "\t\n Faiq \t\n";

console.log(myName);
console.log(myName.trim());

// Q 7:

console.log( 5 + 3);
console.log( 4 * 2);
console.log( 10 - 2);
console.log( 16 / 2); 

// Q 8 :

//(Refer to the answer for Quwstion 7,as it same purpose.)


// Question 9 :

let favorate_number : number = 10;

console.log(`My favorate number ${famous_person}.`);

// Q 10:


// Faiq , 2024-05-07
// This is program a personal message.
let my_name : string = "Faiq Hussain";
console.log(`Hell ${myName}, would you like to learn some Typscript to day?`);

// Q 11:

let pesonName : string[] = ["Fariz", "Faiq","Fazir","Fariha"];
for(let i = 0; i < pesonName.length; i++){
    console.log(pesonName[i]);
}


// Q 12:

let personName : string[] = ["Fazir", "Faiq","Fariha","Fariz"];
for (let name of personName) {
    console.log(`Hello ${personName}, would you like to learn some Typscript today?`);
}

// Q 13:

let transports: string [] = ["Honda motercycle","Tesla car","Bianchi bicycle"];

transports.forEach(transport => {
    console.log(`I would like to owan a ${transport}.`);
});

//Q 14:

let guests : string[] = ["Albert Einstien","Marie Curie","Nikola Tesla"];

guests.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

//Q 15:

let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend}, can t make it to dinner.`)

//Replace the guest
let newGuest = "Landro da vanica";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitation

guests.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


//Q 16:

let Guests: string [] = ["Albert Einstine","Marie Corie","Landro Vinci"];
console.log ("Great news! I found a bigger dinner table!");

// Adding more guests

Guests.unshift("Isaac Newton");
Guests.splice(Guests.length / 2, 0, "Charles Darwin");
Guests.push("Ada Lovelace");

Guests.forEach(Guest =>{
    console.log(`Dear ${Guest}, would you like to join me for dinner?`);
});

//Q 17:

console.log("Unfortunately, I can only invite tow people for dinner.");

while (guests.length > 2  ) {
    let removedGuest = guests.pop();
    console.log (`Sorry, ${guests}, I can't invited you to dinner.`);
}

guests.forEach(guest =>{
    console.log(`Dear ${guest},your still invited to dinner`);
});

guests.splice(0, guests.length);
console.log(guests); //Show an empty list

//Q 18:


