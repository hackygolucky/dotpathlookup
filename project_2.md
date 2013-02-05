# Project 2
### Part 1:

Write a module -- README, tests, and all -- that exports a function that
takes a string and returns a function that takes an object that returns a string.

Whew. That's a mouthful! What we're looking for, in other words, is something
that does this:

```javascript

var dotpath = require('your-module-name')

var find = dotpath('part.key.attribute')

var found = find({part: {key: {attribute: "woop woop"} }})

console.log(found) // outputs "woop woop"

var not_found = find({}) || find() || find(null)

console.log(not_found) // outputs undefined

```

Once you're done and you've got tests, publish your module on NPM.

### Part 2:

Open up the last project ("A tiny templating language"). Use `npm install --save <yourmodule>`
to make the module you just wrote available.

### Bonus points:

Rewrite the first module, now that you have tests. Do not use any loops.

