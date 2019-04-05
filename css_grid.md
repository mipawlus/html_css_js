**css grid**
```
container: grid;
```

```
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

```
grid-template-rows: 50px 50px
```

```
grid-template-columns: auto 50px 10% 2fr 1fr;
This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.
```
grid-column-gap: 10px;

grid-row-gap: 5px;

**grid-gap: 10px 20px;**

grid-column: 1 / 3;
```
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  
  .item5 {
    background: PaleGreen;
    /* add your code below this line */
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    /* add your code above this line */
  }
  
  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
  
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div
```
```
grid-row: 2 / 4;
```
```
justify-self: start, center, end;
```
```
align-self: start, center, end;
```
```
justify-items: start, center, end;
```
```
align-items: start, center, end;
```
```
grid-template-areas:
      "header header header"
      ". content content"
      "footer footer footer";
```
```
.item1 { grid-area: header; }
```