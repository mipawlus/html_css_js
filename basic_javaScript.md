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

i--;

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