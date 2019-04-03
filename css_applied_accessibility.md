**access**
Add a Text Alternative to Images for Visually Impaired Accessibility
```
<img src="importantLogo.jpeg" alt="Company logo">
```

Responsive Web design
```
Here's an example of a media query that returns the content when the device's width is less than or equal to 100px:

@media (max-width: 100px) { /* CSS Rules */ }

and the following media query returns the content when the device's height is more than or equal to 350px:

@media (min-height: 350px) { /* CSS Rules */ }

Remember, the CSS inside the media query is applied only if the media type matches that of the device being used.
```
```
<style>
  p {
    font-size: 20px;
  }
  
  /* Add media query below */
  @media (max-height: 800px) {
    p {
    font-size: 10px;
    }
  }  
</style>
```
```
img { width: 720px; }

You can use:

img {
  max-width: 100%;
  display: block;
  height: auto;
}
```
```
Instead of using em or px to size text, you can use viewport units for responsive typography. Viewport units, like percentages, are relative units, but they are based off different items. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.
```
The four different viewport units are:
```
vw: 10vw would be 10% of the viewport's width.
vh: 3vh would be 3% of the viewport's height.
vmin: 70vmin would be 70% of the viewport's smaller dimension (height vs. width).
vmax: 100vmax would be 100% of the viewport's bigger dimension (height vs. width).
```
```
h2 {
      width: 80vw;
      }
  p {
      width: 75vmin;
      }
```