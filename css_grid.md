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
