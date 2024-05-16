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

console.log(`My favorate number ${favorate_number}.`);

// Q 10:


// Faiq , 2024-05-07
// This is program a personal message.
let my_name : string = "Faiq Hussain";
console.log(`Hell ${myName}, would you like to learn some Typscript to day?`);

// Q 11:

let person : string[] = ["Fariz", "Faiq","Fazir","Fariha"];
for(let i = 0; i < person.length; i++){
    console.log(person[i]);
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
 let places: string [] = ["New Zeland","Iceland","Japan","Swizerland","Norway"];

 console.log("Original order:", places);

 console.log("Alphabetical order:",[...places].sort());

 console.log("Original order:", places);

 console.log("Revers alphabetical order:",[...places].sort());

 console.log("Original order:",places);

 places.reverse();
 console.log("Reverse order:", places);

 places.reverse();
 console.log("Original order:", places);

 places.sort();
 console.log("Alphabetical order:", places);

 places.reverse();
 console.log("Reverse alphabetical order:", places);


//Q 19:

let speacal_guests: string[] = ["Albert Einstein","Marie Corie","Leonardo da Vinci",
"Isaac Newton","Charles Drawin"];
console.log (`I am inviting ${speacal_guests.length}, people to dinner.`);

//Q 20:

let countries: string[] = ["Japan","Canada","China","England","Iceland",];
console.log("Countries I'd to visit:",countries);

//Q 21:

let book:{titel:string;Auther:string;yearPublisher:number} = {
    titel: "The Neem Tree",
    Auther: "Alber Einistine",
    yearPublisher: 1985 
}
console.log (`Book info ${book.titel},by ${book.Auther}, published in ${book.yearPublisher}.`);

//Q 22:


let friends: string[]= ["Fariz", "Fazir",  "Kashif"];

console.log(friends[3]); // International Error Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Kashif"; // Correcting the error by accessing a valid index.


//Q 23;

let car = "subaru";


console.log("Is car == 'sabaru'? I predict True.");
console.log(car == 'subaru'); // true

console.log("Is car == 'toyota'? I predict False.");
console.log(car == "toyota"); // False

//Q 24:
 
// Equality with string
console.log("Testing equality with string:");
console.log("apple" == "apple"); // True



// Using the lowercase function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True


// Numerical tests
console.log("Numerical test");
console.log(10 > 5); //true
console.log(2 < 1); // False

// Tests using "and" and 'or' operators
console.log("Test with 'and' and 'or'");
console.log(true && false); // False
console.log(true );
console.log(false);

// Test weather an item is in a array
let fruits = ["apple","banana","cherry"];
console.log("Is 'appie' in fruits?");
console.log(!fruits.includes("mango")); // True


// Q 25:

// Version that passes:

let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}


// Version that fails(no output)
if (alien_color == "green"){
    // no output beacuse the condition is false
}



//Q 26:

// Version that runs the if block:

alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log('You just earned 10 points.')
}


// Version that runs the else block:


alien_color ="yellow";
if (alien_color == "green") {
    console.log("you just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}


// Q 27:

// Red alien version
alien_color = "red";
if (alien_color == "green") {
    console.log("You just earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You just earned 10 points.");
} else if (alien_color == "red") {
    console.log("You just earned 15 points.")
}

// Green alien version


alien_color ="green";
if(alien_color == "green") {
    console.log("You just earned 5 points.");
} else if (alien_color == "red") {
    console.log("You just earned 10 points.");
} else if (alien_color == "yellow") {
    console.log("You just earned 15 points.");
}


// Yellow alien version

alien_color ="yellow";
if (alien_color == "green") {
    console.log("Yoy just earned 5 points.");
} else if (alien_color == "yellow") {
    console.log("You just earned 10 points.");
} else if (alien_color == "red") {
    console.log("You just earned 15 points.");
}

// Q 28:


let age: number = 12; 
if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log ("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid. ");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log ("The person is a adult.");
} else {
    console.log("The person is a elder. ");
}

//Q! 29:


let favorate_fruits: string [] = ["apple", "mango", "oraing"];

if(favorate_fruits.includes("apple")) {
    console.log ("Yoy realy like apple!");
} if (favorate_fruits.includes("mango")) {
    console.log ("You really like a mango");
} if (favorate_fruits.includes("oraing")) {
    console.log("You really like a oraing!");
}


//Q 30 :
 
let userNames : string[] = ["admin", "user1" ,"user2", "user3", "user4"];
 
userNames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see status report?");
    } else {
        console.log(`Hello ${userNames}, thank you for logging in again.`);
    }
});

// Q 31:

let username : string[] = [];

if(username.length === 0) {
    console.log("We need to find some users!");
} else {
    // Great user

}
// Removing all user names ensure the message "We to  ned find some useres!",is printed.


// Q 32:


let current_users : string[] = ["user1", "admin", "user3", "user4", "user5" ];
let new_users : string[] = ["User1" , "User6", "admin", "user8", "User9"];

new_users.forEach(new_users => {
    if(current_users.some(current_users => current_users.toLowerCase()===
new_users.toLowerCase())) {
    console.log(`${new_users}, will need to enter a new username.`);
} else{
    console.log(`${new_users}, is available. `)
}
});

// Q 33:

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
    let suffix ="th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});

// Q 34:

let pizzas : string[] = ["pepperoni", "margherita", "hawaiian"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

// Q 35:


let animals: string[] = ["dog", "cat", "cow"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet");

// Q 36:


function make_shirt(size: string, message:string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}

 make_shirt("medium", "Code is Life");

 // Q 37:


 function made_shirt(size : string = "Laqrge",message : string = "I love Typscript") {
   console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
 }

 made_shirt();
 made_shirt("medium");
 made_shirt("small", "Dive into Coding");


 // Q 38:

 function describe_city( city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
 }

 describe_city("karachi");
 describe_city("lahore");
 describe_city("Tokyo", "Japan");

 // Q 39:


 function city_country(city: string, country: string) : string {
    return `${city}, ${country};`
 }

 console.log(city_country("Lahore", "Pakistan"));
 console.log(city_country("Tokyo", "Japan"));
 console.log(city_country("Paris", "France"));

 //Q 40:
 
 
function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
     return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album",12));


//Q 41:


//let magicians : string[] = ["Alice", "David", "Charis"];

//function show_magicians(magicians: string[]) {
  //  magicians.forEach(magicians => {
   //     console.log(magicians);
    //});
//}

//show_magicians(magicians);


//Q 42:


//function make_great(maginians: string[]) {
  //  for (let i = 0; i < magicians.length; i++) {
    //    magicians[i] = magicians[i] + "the Great";
    //}
//}

//make_great(magicians); // Modifies the orignal arry
//show_magicians(magicians); // shows modified names


//Q 43:


function make_sandwich(...item: string[]) {
    console.log (`Making a sandwich with: ${item.join(',')},`);
}
 
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");


//Q 44:


function make_car(manufacturer: string, model: string, ...options: [string, any][]):
Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car
}

 console.log(make_car("Toyota","Corolla",["color", "red"],["year",2022]));
 console.log(make_car("Ford","Fiesta",["color","blue"],["sunroof","true"]))

// Q 45:
let laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function(){
        console.log(`This is laptop is a ${this.year} ${this.make} ${this.model} .`);
    }
};
 laptop.describe();



