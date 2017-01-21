find-emails-in-string
================
Package for finding emails in strings or sentences.

* Returns array of emails.


Installation
-----

```bash
npm install find-emails-in-string --save
```

Usage
-----


```Javascript
var findEmails = require('find-emails-in-string');

findEmails("Sentence with email@example.com.");
// => ["email@example.com"]

findEmails("Sentence with multiple@example.com and another@example.com.");
// => ["multiple@example.com", "another@example.com"]

```

Support Project
-----

Find this package useful? 

[Support this project on GitHugz!](http://www.githugz.com)
