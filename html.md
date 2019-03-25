**html_css_js** 

**HTML Elements**

Headers

```
<h1></h1> <h2></h2> <h3></h3> <h4></h4>
```

Paragraph

```
<p></p>
```

Comments

```
<!-- -->
```

Images

```
<img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Logo-psp.png" alt="text">
```

External Pages with Anchor Elements

```
<a href="https://freecodecamp.org">this links to freecodecamp.org</a>
```

Internal link

```
 <a href="#footer" >Jump to Bottom</a> 
```
```
<footer id="footer">Copyright Cat Photo App</footer>
```

Nest an Anchor Element within a Paragraph

```
<p><a href="http://freecatphotoapp.com">Text</a> View more </p>
```

Dead link

```
<a href=# alt="dead link"></a>
```

Image as a link

``` 
<a href=#>  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
```

Unordered lists

``` 
<ul>
     <li>milk</li>
     <li>cheese</li>
</ul> 
```
Ordered lists
```
<ol>
    <li></li>
    <li></li>
</ol>
```
Input elements
```
<input type="text">
```
```
<input type="text" required>
```
Input placeholder
```
<input type="text" placeholder=" something"/>
```

```
<form action="/url-where-you-want-to-submit-form-data"></form>
```
```
<form action="/submit-cat-photo"><input type="text" placeholder="cat photo URL"></form>
```
Button
```
<button type="submit">Submit</button>
```
```
<form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
</form>
```
Radio buttons
```
    <form action="/indoor">
        <label for="indoor"> 
            <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
        </label>
    </form>
    <form action="/outdoor">
        <label for="outdoor"> 
            <input id="outdoor" type="radio" name="indoor-outdoor">outdoor 
        </label>
    </form>
```
Checkbox
```
    <label for="loving">
      <input id="loving" type="checkbox" name="personality"> Loving
    </label>
    <label for="hating">
      <input id="hating" type="checkbox" name="personality"> Hating
    </label>
    <label for="patroling">
      <input id="patroling" type="checkbox" name="personality"> Patroling
    </label>
```
Check radio buttons and checkboxes
```
<input type="radio" name="test-name" checked>
```
Division element
```
<div></div>
```
Declare the type of an HTML Document
```
<!DOCTYPE html>
<html>
  <!-- Your HTML code goes here -->
</html>
```
Head and body of HTML Document
```
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```