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
Margin
```
    .margin {
        margin: *px;
    }
```