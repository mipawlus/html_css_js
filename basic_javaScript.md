Comment

// This is an in-line comment.

/* This is a
multi-line comment */

JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object

Declare JavaScript Variables

var ourName;

ourName = 7; var ourName = 7;

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

Operators

addition +

JavaScript uses the + symbol as addition operation when placed between two numbers.

myVar = 12 + 6; // assigned 18

Substraction - 

JavaScript uses the - symbol for subtraction.

myVar = 12 - 6; // assigned 6

Multiply *

JavaScript uses the * symbol for multiplication of two numbers.

myVar = 13 * 13; // assigned 169

Divide

JavaScript uses the / symbol for division.

myVar = 16 / 2; // assigned 8

Increment a Number

You can easily increment or add one to a variable with the ++ operator.

i++;

is the equivalent of

i = i + 1;

Decrement a Number

You can easily decrement or decrease a variable by one with the -- operator.

i--;-

is the equivalent of

i = i - 1;

Decimal number = 5.4

Quotient - Divide One Decimal by Another

var quotient = 4.4 / 2.0

The remainder operator % gives the remainder of the division of two numbers.

Example

5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)

Compound Assignment With Augmented Addition

var myVar = 1;
myVar += 5;
console.log(myVar); // Returns 6

Compound Assignment With Augmented Subtraction

var myVar = 1;
myVar -= 1;
console.log(myVar); // Returns 0

Compound Assignment With Augmented Multiplication

var myVar = 1;
myVar *= 5;
console.log(myVar); // Returns 5

Compound Assignment With Augmented Division

var myVar = 10;
myVar /= 2;
console.log(myVar); // Returns 5

Declare String Variables

var myLastName = lastName;

Escaping Literal Quotes in Strings

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

Escape Sequences in Strings

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
```
FirstLine
    \SecondLine
ThirdLine
```
var myStr =  "FirstLine\n \t\\SecondLine \nThirdLine"; // Change this line

Concatenating Strings with Plus Operator

'My name is Alan,' + ' I concatenate.'
```
var myStr = "This is the start." + " This is the end.";
```

```
var myStr = "This is the start.";
myStr += " This is the end.";
```

Find the Length of a String
```
variableName.length;
```

Bracket Notation for indexing Character in a String
```
var variableName = "Some string";
var indexNumber = variableName[0];
```

Bracket Notation for Last Character in a String
```
var lastLetterOfLastName = lastName[lastName.length - 1];
```

Bracket Notation for Nth-to-Last Character in a String
```
var lastLetterOfLastName = lastName[lastName.length - n];
```

```
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = myNoun + " something " + myAdjective + " everything " + myVerb + " anything " + myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
wordBlanks("cat", "little", "hit", "slowly");
```

Store Multiple Values in one Variable using JavaScript Arrays

var myArray = ["string", 245];

Multi-dimensional Array

var myArray = [["the test", "the example"], [24, 25]];

 Access Array Data with Indexes
 ```
 var array = [50,60,70];
array[0]; // equals 50
var data = array[1]; // equals 60
 ```

Modify Array Data With Indexes
```
var myArray = [18,64,99];
myArray[0] = 45;
```
Access multidimension array
```
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

Manipulate Arrays with push()
```
var arr= [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
```
Manipulate Arrays with pop()
```
var threeArr = [1,2,3];
var oneDown = threeArr.pop();
// threeArr is [1,2]
// oneDown is 3
```

Manipulate Arrays with shift()
```
var threeArr = [1,2,3];
var oneDown = threeArr.shift();
// threeArr is [1,2]
// oneDown is 1
```