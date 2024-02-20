const PersonalInfo = {
  FirstName: "Aryan",
  LastName: "Swami",
  city: "Jaipur",
  Country: "India",
  PinCode: "303905",
};
const { FirstName, LastName } = PersonalInfo;
console.log(FirstName, LastName);

// this is how we can destructuring Object in js
//we can assign short keywords to access these values like this
const { FirstName: FN, LastName: LN } = PersonalInfo;
// now we can access lite this
console.log(FN, LN);
//this work as same as before
