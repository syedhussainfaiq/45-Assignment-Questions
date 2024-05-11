// Question: 1 Install Node>js, Typescript and VS Code on your Laptop.
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
