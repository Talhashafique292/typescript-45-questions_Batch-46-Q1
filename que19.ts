//In this program i just printed people invited remained in program 17

var guest_list = ["Ahmed", "Faisal", "Muazam"];
//program 14
for (var i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear " +
      guest_list[i] +
      "! " +
      "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
  );
}
//program 15
console.log(
  "Hey everyone! " +
    guest_list[2] +
    ", can't make it to attend the dinner tonight due to some emergency."
);
guest_list.splice(2, 1, "Talha");
for (var i = 0; i < guest_list.length; i++) {
    console.log(
      "Dear " +
        guest_list[i] +
        "! " +
        "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
    );
  }
  //program 16
  console.log(
    "\nGood news everyone! We have a room for more guests. More guests more fun:)\n"
  );
  guest_list.unshift("Osama"); //unshift shift the string at beggining of array
  guest_list.splice(guest_list.length / 2, 0, "Junaid"); //splice use to insert one or more element .lenth/2 means Junaid will be added after 2nd one
  guest_list.push("Hanan");
  for (var i = 0; i < guest_list.length; i++) {
    console.log(
      "Dear " +
        guest_list[i] +
        "! " +
        "Please be there at dinner with us tonight. Your presence will elevate our pleasure. Thanks"
    );
  }
  //program 17 
  console.log(
    "\nHey Everyone! Sad news, I can invite only two people for dinner tonight due to shortage of space.\n"
  );
  
  var x:any = "";
  for (var i = guest_list.length; i > 2; --i) {
    x = guest_list.pop();
    console.log("Sorry " + x + ", I can't invite you at dinner tonight.");
}
for (var i = 0; i < guest_list.length; i++) {
    console.log(
      "Dear " + guest_list[i] + ", you are still invited at dinner tonight."
    );
  }
  //19starts
  console.log("\nPeople invited: " + guest_list.length)  