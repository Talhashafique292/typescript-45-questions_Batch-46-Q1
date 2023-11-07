//In this program I made array of alien colors and then apply if condition to test the output condition change here
var alien_color = ["green", "yellow", "red"];
var x = "green";
if (x === alien_color[0]) {
    console.log("Player just earned 5 points for shooting the alien!");
}
else {
    console.log("Player just earned 10 points!");
}
var x = alien_color[2];
if (x === alien_color[1]) {
    console.log("Player just earned 5 points for shooting the alien!");
}
else if (x == alien_color[2]) {
    console.log("Player just earned 10 points for shooting the alien!");
}
else {
    console.log("Player just earned 10 points!");
}
var x = "blue";
if (x === alien_color[0]) {
    console.log("Player just earned 5 points for shooting the alien!");
}
else if (x == alien_color[1]) {
    console.log("Player just earned 10 points for shooting the alien!");
}
else {
    console.log("Player just earned 10 points!");
}
export {};
