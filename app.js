// Question: 1 Install Node>js, Typescript and VS Code on your Laptop.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Q 2:
var Name = "Faiq";
console.log("Hello ".concat(Name, ", Would you like some Typescript today?"));
// Q 3:
var nAme = "Faiq";
console.log(nAme.toLowerCase());
console.log(nAme.toUpperCase());
console.log(nAme.charAt(0).toUpperCase() + nAme.slice(1).toLowerCase());
// Q 4:
console.log("Albert Einstin once said, \"A person who never made a mistak never tried \nanything new.\"");
// Q 5:
var famous_person = "Albert Einstin";
var message = "".concat(famous_person, ", once said, \"A person who never made mistak never tried\nanything new.\"");
console.log(message);
// Q 6:
var myName = "\t\n Faiq \t\n";
console.log(myName);
console.log(myName.trim());
// Q 7:
console.log(5 + 3);
console.log(4 * 2);
console.log(10 - 2);
console.log(16 / 2);
// Q 8 :
//(Refer to the answer for Quwstion 7,as it same purpose.)
// Question 9 :
var favorate_number = 10;
console.log("My favorate number ".concat(famous_person, "."));
// Q 10:
// Faiq , 2024-05-07
// This is program a personal message.
var my_name = "Faiq Hussain";
console.log("Hell ".concat(myName, ", would you like to learn some Typscript to day?"));
// Q 11:
var pesonName = ["Fariz", "Faiq", "Fazir", "Fariha"];
for (var i = 0; i < pesonName.length; i++) {
    console.log(pesonName[i]);
}
// Q 12:
var personName = ["Fazir", "Faiq", "Fariha", "Fariz"];
for (var _i = 0, personName_1 = personName; _i < personName_1.length; _i++) {
    var name_1 = personName_1[_i];
    console.log("Hello ".concat(personName, ", would you like to learn some Typscript today?"));
}
// Q 13:
var transports = ["Honda motercycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to owan a ".concat(transport, "."));
});
//Q 14:
var guests = ["Albert Einstien", "Marie Curie", "Nikola Tesla"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
//Q 15:
var unableToAttend = "Nikola Tesla";
console.log("".concat(unableToAttend, ", can t make it to dinner."));
//Replace the guest
var newGuest = "Landro da vanica";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
//Q 16:
var Guests = ["Albert Einstine", "Marie Corie", "Landro Vinci"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
Guests.unshift("Isaac Newton");
Guests.splice(Guests.length / 2, 0, "Charles Darwin");
Guests.push("Ada Lovelace");
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ", would you like to join me for dinner?"));
});
//Q 17:
console.log("Unfortunately, I can only invite tow people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(guests, ", I can't invited you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",your still invited to dinner"));
});
guests.splice(0, guests.length);
console.log(guests); //Show an empty list
//Q 18:
var places = ["New Zeland", "Iceland", "Japan", "Swizerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Revers alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
places.reverse();
console.log("Reverse order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
//Q 19:
var speacal_guests = ["Albert Einstein", "Marie Corie", "Leonardo da Vinci",
    "Isaac Newton", "Charles Drawin"];
console.log("I am inviting ".concat(speacal_guests.length, ", people to dinner."));
//Q 20:
var countries = ["Japan", "Canada", "China", "England", "Iceland",];
console.log("Countries I'd to visit:", countries);
//Q 21:
var book = {
    titel: "The Neem Tree",
    Auther: "Alber Einistine",
    yearPublisher: 1985
};
console.log("Book info ".concat(book.titel, ",by ").concat(book.Auther, ", published in ").concat(book.yearPublisher, "."));
//Q 22:
var friends = ["Fariz", "Fazir", "Kashif"];
console.log(friends[3]); // International Error Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Kashif"; // Correcting the error by accessing a valid index.
//Q 23;
var car = "subaru";
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
console.log(true);
console.log(false);
// Test weather an item is in a array
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'appie' in fruits?");
console.log(!fruits.includes("mango")); // True
// Q 25:
// Version that passes:
var alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
// Version that fails(no output)
if (alien_color == "green") {
    // no output beacuse the condition is false
}
//Q 26:
// Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log('You just earned 10 points.');
}
// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
    console.log("you just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
// Q 27:
// Red alien version
alien_color = "red";
if (alien_color == "green") {
    console.log("You just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You just earned 15 points.");
}
// Green alien version
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points.");
}
else if (alien_color == "red") {
    console.log("You just earned 10 points.");
}
else if (alien_color == "yellow") {
    console.log("You just earned 15 points.");
}
// Yellow alien version
alien_color = "yellow";
if (alien_color == "green") {
    console.log("Yoy just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You just earned 15 points.");
}
// Q 28:
var age = 12;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid. ");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is a adult.");
}
else {
    console.log("The person is a elder. ");
}
//Q! 29:
var favorate_fruits = ["apple", "mango", "oraing"];
if (favorate_fruits.includes("apple")) {
    console.log("Yoy realy like apple!");
}
if (favorate_fruits.includes("mango")) {
    console.log("You really like a mango");
}
if (favorate_fruits.includes("oraing")) {
    console.log("You really like a oraing!");
}
//Q 30 :
var userNames = ["admin", "user1", "user2", "user3", "user4"];
userNames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ", thank you for logging in again."));
    }
});
