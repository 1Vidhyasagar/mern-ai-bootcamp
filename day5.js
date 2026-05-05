// let person = {
//   name: "Vidhyasagar",
//   age: 28,
//   city: "Solapur",
// };

// console.log(person.name); // "Vidhyasagar"
// console.log(person["city"]); // "Solapur"


// let car = {
//   brand: "Volkswagen",
//   model: "Polo",
//   year: 2016,
//   start: function() {
//     console.log("Car started!");
//   }
// };

// car.start(); // calls the method


// let student = { name: "Sara", grade: "A", age: 20 };

// console.log(Object.keys(student));   // ["name","grade","age"]
// console.log(Object.values(student)); // ["Sara","A",20]
// console.log(Object.entries(student)); // [["name","Sara"],["grade","A"],["age",20]]


let contacts = [];

// Add contact
function addContact(name, phone, email) {
  let contact = { name: name, phone: phone, email: email };
  contacts.push(contact);
  console.log("Contact added:", contact);
}

// List contacts
function listContacts() {
  console.log("Your contacts:");
  contacts.forEach((contact, index) => {
    console.log(
      index +
        1 +
        ". " +
        contact.name +
        " - " +
        contact.phone +
        " - " +
        contact.email,
    );
  });
}

// Remove contact
function removeContact(index) {
  contacts.splice(index - 1, 1);
  console.log("Contact removed at position", index);
}

// Example usage
addContact("Vidhyasagar", "9876543210", "vidhyasagar@example.com");
addContact("John", "9123456780", "john@example.com");
listContacts();
removeContact(1);
listContacts();
