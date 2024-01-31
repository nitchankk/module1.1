let peopleObj1 = { name: "John", surname: "Doe" };
let peopleObj2 = { name: "Sarah", surname: "Wilson" };
let peopleObj3 = { name: "David", surname: "Brown" };

// Compare the name properties (case-insensitive)
if (peopleObj1.name.toLowerCase() === peopleObj2.name.toLowerCase() &&
    peopleObj2.name.toLowerCase() === peopleObj3.name.toLowerCase()) {
    console.log("These three objects have the same name.");
} else {
    console.log("These three objects do not have the same name.");
}