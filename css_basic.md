**Basic CSS**
CSS selector
```
<style>
    h2 {
        color: blue;
    }
</style>
```
CSS class
```
<style>
.blue-text {
    color: blue;
}
</style>

<h2 class="blue-text">Cat</h2>
```
Font size
```
p {
    font-size: 16 px
}
```
Font family
```
p {
    font-family: sans-serif;
}
```
Google font family
```
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```
Degrade fonts
```
 font-family: Sans, Arial;
```
Size your image
```
.name-of-class {
    width: 500 px
}
```
Border
```
.name-of-class {
    border-color: color;
    border-width: *px;
    border-style: solid;
    border-radius: 10px; or border-radius: 50%;
}
```
Apply multiple classes
```
<element class="class1 class2">
```
.name-of-class {
    background-color: color;
}
Set ID of an Element
```
    <element id="">
```
**ID is not reusable and should only be applied to one element**
**always reference classes by putting a . in front of their names. You always reference ids by putting a # in front of their names**
Style ID
```
    #id {
        example-example: color;
    }
```
Padding
```
    .class {
        padding: *px;
    }
```
Different padding for each side
```
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
```
Or clockwise padding
```
padding: 20px 40px 20px 40px;
```
Margin
```
    .margin {
        margin: *px; or negative margin -*px;
    }
```
Different margin for each side
```
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
```
Or clockwise margin
```
margin: 20px 40px 20px 40px;
```
Use Attribute Selectors to Style Elements
```
[type='radio' 'checkbox'] {
    margin: 20px 0px;
}
```
Absolute and Relative Units
Absolute as in, mm or px
Realtive as em or rem
As example
```
    .class {
        padding: 1.5em;
    }
```
**We can override styles in subsequent CSS**

Order of the class declarations in the ``<style>`` section are what is important. The second declaration will always take precedence over the first, browsers read CSS from top to bottom.
ID - class - style
Overide all other styles with !important as color: example !important;

Use Hex Code for Specific Colors
```
class/id {
    color: #000000;
}
```
You can Use Abbreviated Hex Code
```
Cyan #0FF Green #0F0 Red #F00 Fuchsia #F0F
```
Use RGB for 
```
 class/id {
     background-color: rgb(0, 0, 0); ||for white
 }
```
CSS Variable
```
    .penguin {
        --penguin-skin: color;
    }
```
Use CSS Variable
```
    class/id {
        element: var(--penguin-skin);
    }
```
Attach fallback value to CSS variable
```
    class/id {
        element: var(--penguin-skin, black);
    }
```
Creating variables to be available throughout the whole web page
```
    :root
```
Use a media query to change a variable
```
    @media (max-width: 350px) {
        :root {
            --variable-name: *px;
        }
    }