**Applied Visual Design**
Text-align Property
```
text-align: left, right, center, justify:
```
Adjust the Width of an Element Using width property
```
    class {
        width: 220px;
    }
```
Adjust the Height of an Element
```
    class {
        height: 25px;
    }
```
Make text bold font-weight: bold;
```
<strong></strong>
```
Underline font-decoration: underline;
```
<u></u>
```
Emphasize text font-style: italic
```
<em></em>
```
Stikethrough text text-decoration: line-through;
```
<s></s>
```
Horizontal line
```
<hr></hr>
```
**RGBa** stands for:
  r = red
  g = green
  b = blue
  a = alpha/level of opacity

The alpha value can range from 1, which is fully opaque or a solid color, to 0, which is fully transparent or clear
```
    class {
        background-color: rgba(45, 45, 45, 0.1)
    }
```
Add Shadows to an Element
```
    class/id {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
```
**Opacity**
<ul>
<li>A value of 1 is opaque, which isn't transparent at all.</li>
<li>A value of 0.5 is half see-through.</li>
<li>A value of 0 is completely transparent.</li>
</ul>

```
opacity: 0.7;
```
text-transform
Value	Result
lowercase	"transform me"
uppercase	"TRANSFORM ME"
capitalize	"Transform Me"
initial	Use the default value
inherit	Use the text-transform value from the parent element
none	Default: Use the original text

line-height pseudo-classes a:hover position: relative;
The CSS offsets of top or bottom, and left or right

Absolute position
```
    position: absolute;
```
Fixed position
```
    position: fixed;
```
**One key difference between the fixed and absolute positions is that an element with a fixed position won't move when the user scrolls.**
float: left or right;

 Overlapping Elements 
 z-index: 1 or 2;

 Center Element Horizontal
 ```
 margin: auto;
 ```
 hsl(%, %, %);

 AMAZING
 background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));

 background: repeating-linear-gradient(90deg, yellow 0px, blue 40px, green 40px, red 80px);

 url();

 transform: scale(1.5);
 scale, move, rotate, skew, etc.

 element:hover {
     transform: scale(1.1);
 }

 element {
     transform: skewX(-32deg);
 }

 element {
     transform: skewY(-10deg);
 }

|| rotate(25deg);

 border-radius: offset-x offset-y blur-radius spread-radius
```
#rect {
    animation-name: rainbow;
    animation-duration: 4s;
    
  }
  @keyframes rainbow {
    0% {
      background-color: blue;
      }
    50% {
      background-color: green;
    }  
    100% {
      background-color: yellow;
```
```
      button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    **animation-fill-mode: forwards;** 
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
```
```
#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}

@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
    left: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
    left: 25px;
  }
  100% {
    background-color: yellow;
    top: 0px;
    left: -25px;
  }
}
```
```
@keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
  ```
   animation-iteration-count: 3, infinite;

   animation-timing-function: ease, ease-in, ease-out, linear;

   animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);