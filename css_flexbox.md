url(https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg)

```
<style>
  #box-container {
    height: 500px;
    display: flex;
  }
  
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
    
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
    
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
Flex to Position Two Boxes
```
display: flex;
```
Flex direction
```
flex-direction: row, column, row-reverse, column-reverse;
```
justify-content
```
justify-content: center, flex-start, flex-end, space-between, space-around;
```
The align-items property is similar to justify-content. Recall that the justify-content property aligned flex items along the main axis. For rows, the main axis is a horizontal line and for columns it is a vertical line.

Flex containers also have a cross axis which is the opposite of the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.

CSS offers the align-items property to align flex items along the cross axis. 

align-items
align-items include:

    flex-start: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.
    flex-end: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.
    center: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).
    stretch: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom.
    baseline: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.
    
flex-wrap

direction of the wrap:

    nowrap: this is the default setting, and does not wrap items.
    wrap: wraps items from left-to-right if they are in a row, or top-to-bottom if they are in a column.
    wrap-reverse: wraps items from bottom-to-top if they are in a row, or right-to-left if they are in a column.

flex-shrink: number;

flex-grow: number;

flex-basis: (px, em, %, etc.); auto 

flex: 1 0 10px; will set the item to flex-grow: 1;, flex-shrink: 0;, and flex-basis: 10px;.

order: number;

align-self: