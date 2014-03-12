
# tableize

  Generate a table-friendly object by flattening and normalizing the keys.

## Installation

```
$ npm install tableize
```

## Example

```js
var tableize = require('tableize');

var obj = tableize({
  user: {
    id: 123242123,

    name: {
      first: 'tobi',
      last: 'loki'
    },

    properties: {
      category: 'Buttons',
      label: 'Login'
    },

    context: {
      userAgent: 'Mozilla whatever'
    }
  }
});

console.log(obj);
```

yields:

```js
{ 'user.id': '123242123',
  'name.first': 'tobi',
  'name.last': 'loki',
  'properties.category': 'Buttons',
  'properties.label': 'Login',
  'context.userAgent': 'Mozilla whatever' }
```

# License

  MIT