// chapter # 1  (ALERTS)//

var a ="Hellow World!";
alert(a)

var Message ="Error Please enter a valid password.";
alert (Message);

var _message1 = "Welcome to JS Land ....";
var  _message2 = "Happy Coding!";
var _Message   = _message1  + _message2
alert (_Message );


var _message1 = "Welcome to JS Land ....";
alert(_message1);

var  _message2 = "Happy Coding!";
alert (_message2);

var test$ = "Hello...I can run JS through through my web browser's console.";
console.log (test$);



// Chapter # 2 (VARIABLES FOR STRINGS ) //

var username;
var myName = "Saniya M Yousuf ";



var Message$ ;
Message$ ="Hello World!";
alert (Message$);


var studentName = "Johne Doe";
alert (studentName);

var studentAge = "18 years old";
alert(studentAge);

var acadamic = "Certified Mobile Application DEvelopment";
alert (acadamic);

var email = "saniyayousuf456@gmail.com";
var mes = "My email address is";
alert ( mes  + "  " + email);

var book ="A smarter way to learn JavaScript."
var state = "I am trying to learn from the Book"
alert( state + " " +  book);


document.write("Yah! I can write HTML content in Javascript. ");

// Chapter # 3 (VARIABLES FOR NUMBERS)//

var Age_ = "I am 17 years old.";
alert(Age_);

var numOfVisits = "You Have Visited this site 8th times.";
alert(numOfVisits);

var birthYear = 2005;
var textMessage = "My birth year is ";
console.log("My birth Year is 2005 ");


var visitorName = "zunair yousuf";
var productTite = "T-shirt";
var Quantity = 7;
// alert(visitorName + ordered + Quantity+" "+productTite+s+" "+on+ "XYZ Clothing Store");
console.log("Zunair Yousuf orderd 7 T-shirts on XYZ Clothing Store. ")


// Chapter # 4(VARIABLE NAMES: LEGAL & ILLEGAL)//

var practice_8;

// 5 Legall variables//
// var number8;
// var name$;
// var _8s;
// var gameOfThrones;
// var _age7;

// 5 Illegall varibles ///
// var name#;
// var practice~;
// var 1234;
// var message*;
// var #book$;


 console.log("Rules for naming JS Variables");
 console.log("Variables name can only contain number, $, _ and letters. For Example $my_1stVariable ");
 console.log("Variables ust begin with a letter, $ or _. For Exammple $name, _name or name.");
 console.log("Variables name are case sensitive.");
 console.log("variable names should not be a JS Keywords.");


// Chapter # 5(MATH EXPRESSIONS)//


var _num = 5;
var $num = 3;
var num_ =_num + $num;
console.log("sum of 5 and 3 is 8");

var _num = 5;
var $num = 3;
var num_ =_num - $num;
console.log("difference of 5 and 3 is 2");

var _num = 5;
var $num = 3;
var num_ =_num * $num;
console.log("sum of 5 and 3 is 15");

var _num = 15;
var $num = 3;
var num_ =_num % $num;
console.log("sum of 15 and 3 is 0");


var no_ ;
// document.write("value after variable is ??");
no_ = 5;
// document.write("Initial Value : 5");
no_ = no_++;
// document.write("Value after Increament is 6");
no_ = no_ + 7;
// document.write("VAlue after Addition is 13");
no_ = no_--;
// document.write("Value after decrement is 12");
no_ = no_% 3;
// document.write("The remainder is 0");
alert(no_);

/////////

var movieTicket = 600;
var totalCost = 600 * 5;
console.log("Total cost to buy 5 tickets to a movie is 3000PKR");
//

var _C = 30;
var _F = (_C * 9 / 5) + 32 ;
console.log("30C is 86F");

var $F = 50;
var $C = ($F - 32) * 5 / 9;
console.log("50F is 10C");

//

var priceOfItem1 =200;
var priceOfItem2 = 350;
var quantityOfItem1 = 1;
var quantityOfItem2 = 2;
var shipping = 150;
var totalCharges = (200 * 1) + (350 * 2) + 150;
console.log("price item of 1 is 200")
console.log("Quantity of item 1 is 1")
console.log("Price item of 2 is 350")
console.log("Quantity of item 2 is 2")
console.log("shipping charges is 150")
console.log("                                                                                                 ")
console.log("Total cost of your order is 1050")
//
var totalMarks = 980;
var obtainedMarks = 804;
var percentage =(obtainedMarks / totalMarks) * 100 ;
console.log("              ")
console.log("Total Marks = 980");
console.log("Obtained Marks = 804");
console.log("percentage = 82.0408163265306%");
//

var usDollar = 10;
var saudiRiyal = 25;
var totalCurrency = (10 * 104.80) + (25 * 28);
console.log("Toatl currency in PKR is 1748");
//

var number_ = 6;
number_ =( number_ + 5) * 10 / 2;

//
 var currentYear =2023;
 var birthYear = 2005;
 var AGe = (2023 - 2005)    
 var possibleAge = "17 or 18";
console.log("They are eiter 17 or 18 years old");

//
var radiusOfCircle = 8;
var circumferenceOfCircle = 2 * 3.141 * 8;
var areaOfCircle = 2 * 8 * 8 * 3.142;
console.log("Radius of circle is 8")
console.log("circumference of circle is 50.256")
console.log("Area of Circle is 402.176");
//

var favouriteSnake = "kitkat" ;
var currentAge  =  18   ;
var estimatedAge = 65 ;
var amountPerDay = 2 ;
console.log("you will need 210 kitkat to last you until the rip old age of 65");

// Chapter # 6-9 (MATH EXPRESSIONS) //

var c = 3;
var c = ++c;
var c = c++;
var c = --c;
var c = c--;
alert(c);

console.log("       ")
console.log("Result")
console.log("The value of a is 3")
console.log("    ")
console.log("............................")
console.log("The value of ++a is 4")
console.log("Now the value of a is 4")
console.log("       ")
console.log("The value of a++ is 5")
console.log("Now the value of a is 5")
console.log("     ")
console.log(" The value of --a is 4")
console.log("Now the value of a is 4")
console.log("     ")
console.log("The value of a-- is 3")
console.log("Now the value  of a is 3")
console.log("        ");
//

var $a = 2;
var $b = 1 ;
var result =--$a- --$b + ++$b + $b--;

console.log("The value of $a is 1")
console.log("The value of $b is 0")
console.log("The value of result is 3")
//

var userName = prompt("Enter your name","");
alert  (userName +" " + "Welcome to Our site");
//

var userNumber = +prompt("Enter your Number","");
if(userNumber == 2 ){
    alert("2 *1=2" +"                                          " +"2*2=4"+"                                 " +"2*3=6 "+"                            "+"2*4=8" +"                      " +"2*5=10")
} 
else if(userNumber ==3 ){
    alert("3*1=3" +"                           " +"3*2=6"+"                            "+"3*3=9"+"                            "+"3*4=12"+"                                    "+"3*5=15" )
}
else if(userNumber ==4 ){
    alert("4*1=4" +"                           " +"4*2=8"+"                            "+"4*3=12"+"                            "+"4*4=16"+"                                    "+"4*5=20" )
}
else if(userNumber ==5 ){
    alert("5*1=5" +"                           " +"5*2=10"+"                            "+"5*3=15"+"                            "+"5*4=20"+"                                    "+"5*5=25" )
}
else if(userNumber ==6 ){
    alert("6*1=6" +"                           " +"6*2=12"+"                            "+"6*3=18"+"                            "+"6*4=24"+"                                    "+"6*5=30" )
}
else if(userNumber ==7 ){
    alert("7*1=7" +"                           " +"7*2=14"+"                            "+"7*3=21"+"                            "+"7*4=28"+"                                    "+"7*5=35" )
}

else if(userNumber ==8 ){
    alert("8*1=8" +"                           " +"8*2=16"+"                            "+"8*3=24"+"                            "+"8*4=32"+"                                    "+"8*5=40" )
}
else if(userNumber ==9 ){
    alert("9*1=9" +"                           " +"9*2=18"+"                            "+"9*3=27"+"                            "+"9*4=36"+"                                    "+"9*5=45" )
}
else if(userNumber ==10 ){
    alert("10*1=10" +"                           " +"10*2=20"+"                            "+"10*3=30"+"                            "+"10*4=40"+"                                    "+"10*5=50" )
}
else {alert("5*1=5" +"                           " +"5*2=10"+"                            "+"5*3=15"+"                            "+"5*4=20"+"                                    "+"5*5=25" )}

//
var sub1 = prompt("First subject Name","");
var sub2 = prompt("Second subject Name","");
var sub3 = prompt("Third subject Name","");
var sub1Marks = +prompt("subject 1 Marks","");
var sub2Marks = +prompt("subject 2 Marks","");
var sub3Marks = +prompt("subject 3 Marks",""); 
var totalMarks_ = 300;
var obtainedMarks_ =(sub1Marks+  sub2Marks +  sub3Marks);
alert(  obtainedMarks_);
var percentage_ =(obtainedMarks_/ totalMarks_) * 100;
alert(percentage_)


//



// Chapter # 9-11 (USER INPUT & CONDITIONAL STATEMENT) //


var city  = prompt("Enter your city name","");
city=city.toUpperCase;
// if (city == lahore)
{
alert("Welcome to the City Of Lights")};
//

var Gender1 = prompt("Enter your gender","");
if (Gender1 = "male"){
    alert("Good morning Sir")
}
else { 
    alert("Good Morning Ma'am")
}

//

var signal =prompt("Enter the traffic light","");
if (signal === "green") {

    alert("Move Now")
}
else if(signal === "red"){
    alert("Must stop")
}
else {
    alert("Ready to move")
}
//



var fuel = +prompt("Enter your curent fuel","");
if (fuel <= "0.25"){
    alert("Please refill the fuel in your car")
}
else{
    alert("no need to refill")
}

//


var n = 4;
if (++n === 5){
    alert("given condition for variable a is true")
    }
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true")
    }

var c =12;
if (c++ === 13){
    alert("condition 1 is true");
    }
 if (c === 13){
        alert("condition 2 is true");
        }
if (++c < 14){
        alert("condition 3 is true");
        }
if(c === 14){
        alert("condition 4 is true");
        }

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//
var secretNumber = 8;
var num$= +prompt("Guess The Secret Number(Ranging 1---10","");
if(num$ === 8){
    alert("Bingo!Correct answer")
}
else if (num$ >= 7){
    alert("Close enough to the correct answer")
}

//

var temperature =+prompt("Enter your room temperature","");
if (temperature > 40){
    alert("It is too hot outside.")
}
else if (temperature > 30){
    alert("The Weather today is Normal")
}          
else if (temperature  > 20){
    alert("Today’s Weather is cool.")
}
else if(temperature > 10){
    alert("OMG! Today’s weather is so Cool. ")
}
//
 


// Chapter # 12-13  (IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS )//


var r =prompt("Enter number, letter etc","")
if(r <90 && r  >= 65){
    alert("You type an uppercase letter")
}
else if(r <122 && r >=97){
    alert("you type a lower case letter")
}
else{
    alert("its a number")
}


//
var numInput = prompt("Write any number whether positive or negative ");
if(numInput >0){
    alert("You Type a positive number")
}
else if (numInput <0){
    alert("You type a negative number")
}
else if(numInput == 0){
    alert("its 0")
}
//
var letter =prompt("Enter a random Single letter","");
if(letter == a){
    alert("true")
}
else if(letter == "e"){
    alert("true")
}
else if(letter == "i"){
    alert("true")
}
else if(letter == "o"){
    alert("true")
}
else if(letter == "u"){
    alert("true")
}
else{
    alert("flase")
}
//

var correctPassword =12345678;
var password_ =prompt("Enter your password","");
var newPassword = password_;
if(password_ == correctPassword){
alert("Correct password")
}
else{
    alert("incorrect password")
}
//

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}

//
var time =+prompt("Enter the current time in 24 hours format","");
if(time >= 0000 && time < 1200){
    alert("Good Morning")
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon")
}
else if (time >= 1700 && time < 2100 ){
    alert("Good Evening")
}
else if(time >= 2100 && time <= 2359){
    alert("Good night")
}
else{alert("please enter the time")}

//

/// Chapter # 14-16 (ARRAYS)////

var arr =["    "];
// 
var array =["    "];
//
var names_ =[ "zain","saniya","zunair","abdul ahad","ali abbas"];
// 
var numbers_ =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 
var boolien =[1, 0, 01 ,"true","false"];
// 
var mixesArray =["18" ,"saniya1","true","rimsha"];
//
var qualification_ =['SSC','HSC','BSC','BS','BCOM','MS','MPHiL','PhD'];
var ar1= qualification_.slice(0,1)
var ar2= qualification_.slice(1,2)
var ar3= qualification_.slice(2,3)
var ar4= qualification_.slice(3,4)
var ar5= qualification_.slice(4,5)
var ar6= qualification_.slice(6,6)
var ar7= qualification_.slice(7,8)
console.log(qualification_);
document.write("1)SSC ")
//
var std =["bilal","kashif","shahzad"];
var std1 =std.slice(0,1);
var std2 =std.slice(1,2);
var std3 =std.slice(2,3);
var score =[325 ,470,390];
var score1 =score.slice(0,1);
var score2 =score.slice(1,2);
var score3 =score.slice(2,3)
var scoreOfStudent1 =(score1 / 500) * 100;
var scoreOfStudent2 =(score2 / 500) * 100;
var scoreOfStudent3 =(score3 / 500) * 100;
console.log("Score of Bilal is 325.Percentage 63%")
console.log("Score of kashif is 470.Percentage 94%")
console.log("Score of shahzad is 390.Percentage 78%");
document.write("Score of Bilal is 325.Percentage 63%")
document.write("Score of kashif is 470.Percentage 94%")
document.write("Score of shahzad is 390.Percentage 78%");
///



var colorNames =['red' ,"green" , "blue" ,' pink',' red',' orange' ,'purple', 'yellow','brown' ,'white'];
document.write(colorNames);
var color1 =prompt("which color do you want at begining",'');
var userColor1 = color1;
document.write(userColor1);
var color2 =prompt("which color do you want at end ",'');
var userColor2 = color2;
document.write(userColor2);

var color3 =prompt("which  2 or more colors do you want at begining ",'');
var userColor3 = color3;
document.write(userColor3);
//


var cityNames =['karachi','lahore','islamabad','quetta','peshawar'];
var selectedCities=cityNames.slice(2);



/// Chapter # 17-20(ARRAYS AND LOOP)/////////


var example =['apple','mango','banana'];
for(var i =0 ;i<example.length ; i++){
    console.log(example);
}
  

//

var numbers1=[0,1,2,3];
var numbers2=[0,1,2,3];
for(var i =0 ;i<numbers1; i++){
    for(var j=0 ;j<numbers2; j++){
        console.log(numbers1[i]+numbers2[j])
    }
}
/////
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];



 ////////////////////////////////////////////////////////////
 var items =['cake','apple pie','cookiee','chips','patties'];
 var userInput=prompt("enter your favourite snaks");
 for (var i= 0 ;i<items.length; i++){
    if(items[i] == userInput){
        alert(userInput +"is avaialable at index "+i)
    }
 }


 //////////////////////////////////////////////////////////////
 










