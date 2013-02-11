# dotpathlookup

A small module that takes a dotpath string and returns the value of that path from the object, written as part of a tutorial on Javascript.

```javascript
var parse = require('dotpathlookup');
var my_function = parse('{check:{it:{out:"woop woop"}}}');
var obj = {"woop woop"};

console.log(my_function(obj));  // === "woop woop"
```


## API

#### parse = require('dotpathlookup')  -> function(str)

returns a function that accepts a string to split it into a manageable array.

#### parse(str)  -> function(obj)

returns the value of the path, which should only be a string.

## LICENSE

MIT
