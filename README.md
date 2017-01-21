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

Find this package useful? Support this project on GitHugz!

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="HG9DH7T3DLUMC">
    <table>
    <tr><td><input type="hidden" name="on0" value="Donation Amount">Donation Amount</td></tr><tr><td><select name="os0">
        <option value="Small Hugz">Small Hugz $5.00 USD</option>
        <option value="Medium Hugz">Medium Hugz $10.00 USD</option>
        <option value="Large Hugz">Large Hugz $15.00 USD</option>
    </select> </td></tr>
    </table>
    <input type="hidden" name="currency_code" value="USD">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
