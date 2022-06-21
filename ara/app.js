// Qustion1
var positiveInteger = prompt("Enter Any Positive Integer");
var numberPositiveInteger = parseInt(positiveInteger);
document.getElementById("q-1number").innerText = "Number: "+numberPositiveInteger;

var roundPositiveInteger = Math.round(positiveInteger);
document.getElementById("q-1round").innerText = "\n"+" Round Off : "+roundPositiveInteger;

var floorPositiveInteger = Math.floor(positiveInteger);
document.getElementById("q-1floor").innerText = "\n"+"Floor : "+floorPositiveInteger;

var ceilPositiveInteger = Math.ceil(positiveInteger);
document.getElementById("q-1ceil").innerText = "\n"+"Ceil : "+ceilPositiveInteger;


// Qustion2
var negativeInteger = prompt("Enter Any Negative Integer");
var numberNegativeInteger = parseInt(negativeInteger);
document.getElementById("q-2number").innerText = "Number: "+numberNegativeInteger;


var roundNegativeInteger = Math.round(negativeInteger);
document.getElementById("q-2round").innerText = "\n"+" Round Off : "+roundNegativeInteger;

var floorNegativeInteger = Math.floor(negativeInteger);
document.getElementById("q-2floor").innerText = "\n"+"Floor : "+floorNegativeInteger;

var ceilNegativeInteger = Math.ceil(negativeInteger );
document.getElementById("q-2ceil").innerText = "\n"+"Ceil : "+ceilNegativeInteger;

// Qustion 3
var positiveFloatingNumber = prompt("Enter Positive Float Number.");
var floatPositiveFloatingNumber = parseFloat(positiveFloatingNumber);
document.getElementById("q-3number").innerText = "Number: "+floatPositiveFloatingNumber;

var roundPositiveFloatingNumber = Math.round(positiveFloatingNumber);
document.getElementById("q-3round").innerText = "\n"+" Round Off : "+roundPositiveFloatingNumber;

var floorPositiveFloatingNumber = Math.floor(positiveFloatingNumber);
document.getElementById("q-3floor").innerText = "\n"+"Floor : "+floorPositiveFloatingNumber;

var ceilPositiveFloatingNumber = Math.ceil(positiveFloatingNumber );
document.getElementById("q-3ceil").innerText = "\n"+"Ceil : "+ceilPositiveFloatingNumber;


// Qustion 4
var negativeFloatingNumber = prompt("Enter Negative Float Number.");
var floatNegativeFloatingNumber = parseFloat(negativeFloatingNumber);
document.getElementById("q-4number").innerText = "Number: "+floatNegativeFloatingNumber;

var roundNegativeFloatingNumber = Math.round(negativeFloatingNumber);
document.getElementById("q-3round").innerText = "\n"+" Round Off : "+roundNegativeFloatingNumber;

var floorNegativeFloatingNumber = Math.floor(negativeFloatingNumber);
document.getElementById("q-3floor").innerText = "\n"+"Floor : "+floorPositiveFloatingNumber;

var ceilPositiveFloatingNumber = Math.ceil(negativeFloatingNumber);
document.getElementById("q-3ceil").innerText = "\n"+"Ceil : "+ceilPositiveFloatingNumber;