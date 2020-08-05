// The validate function calls the methods below to make the program do what its supposed too//
function validate() {
    var form =document.querySelector('form');
    var userInfo =document.getElementById("UserInfo");
    var Q1 = document.getElementById("Q1");
    var Q2 = document.getElementById("Q2");
    var Q3 = document.getElementById("Q3");
    var Q4 = document.getElementById("Q4");
/*Above I have created some variables to make the methods below a little easier to write
Having put the methods for calling the different elements above it means
that it is easier to  perform tasks to get the elements into another function*/

/*Below checks to see if the question has been answered and if not calls an alert and 
places a border around the question to highlight where the person has gone wrong */
if(form.UserInfo.value ===''){
    alert("Fill in your name please")
    userInfo.style.border = "thick solid red";
    return false;
}
else{
    userInfo.style.border = "none";
}
/*Below checks to see if the question has been answered and if not calls an alert and 
places a border around the question to highlight where the person has gone wrong */
if(form.Q1.value ===''){
    alert("Fill in question 1")
    Q1.style.border = "thick solid red";
    return false;
}
else{
    Q1.style.border = "none";
}
/*Below puts the elements from Q2 that are the checkboxes into variables */
var TwoA = document.getElementById("Q2a");
var TwoB = document.getElementById("Q2b");
var TwoC = document.getElementById("Q2c");
var TwoD = document.getElementById("Q2d");
/*The count is used to determine how many boxes have been checked */
var count = 0;
/*The variable boxes creates an array of the checkboxes*/
var boxes = [TwoA, TwoB, TwoC, TwoD];

/*The for statement loops through of checkboxes and checks which ones have been
checked. If they have been the count var is added on too by how many boxes are checked */
for (var checkbox of boxes) {
	if(checkbox.checked){
  	count++;
  }
}
/*This method checks to see if two checkboxes have been checked. If less than 2 or
more than 2 have been checked it throws up an alert and 
places a border around the question to highlight where the person has gone wrong */
if(form.UserInfo.value ===''){
if(count !== 2){
    alert("Fill in question 2")
    Q2.style.border = "thick solid red";
    return false;
}
else{
    Q2.style.border = "none";
}

/* Below checks to see if the question has been answered and if not calls an alert and 
places a border around the question to highlight where the person has gone wrong */
if(form.Q3.value ===''){
    alert("Fill in question 3")
    Q3.style.border = "thick solid red";
    return false;
}
else{
    Q3.style.border = "none";
}
/*Below checks to see if the question has been answered and if not calls an alert and 
places a border around the question to highlight where the person has gone wrong */
if(form.Q4.value ===''){
    alert("Fill in question 4")
    Q4.style.border = "thick solid red";
    return false;
}
else{
    Q4.style.border = "none";
}

/*This is the variale for the score at the beginning */
var score = 0;
/*These are the methods used to check if the answers are correct and if they are 
add a point on to the score */
if(document.querySelector("select[name=Q1]").selectedIndex === 3){
	console.log("Q1");
	score++;
}
if(TwoA.checked == true && TwoC.checked == true){
	console.log("Q2");
score++;
}
if(document.getElementById("Q3b").checked){
	console.log("Q3");
score++;
}
if(document.querySelector("input[type=text][name=Q4]").value.toLowerCase() ==='british, australian and new zealand sign language') {
	console.log("Q4");
score++;
}
console.log(score);
/*This is the alert that occurs after you submit telling you the score */
alert("Your score was " + score )
return true
}
}