# react-description-box

[![Build Status](https://travis-ci.org/binhqd/react-description-box.svg?branch=master)](https://travis-ci.org/binhqd/react-description-box)
[![bitHound Score](https://www.bithound.io/github/binhqd/react-description-box/badges/score.svg)](https://www.bithound.io/github/binhqd/react-description-box)
[![Coverage Status](https://coveralls.io/repos/binhqd/react-description-box/badge.svg?branch=master&time=2018.03)](https://coveralls.io/r/binhqd/react-description-box?branch=master)
[![bitHound Code](https://www.bithound.io/github/binhqd/react-description-box/badges/code.svg)](https://www.bithound.io/github/binhqd/react-description-box)
[![npm version](https://img.shields.io/npm/v/react-description-box.svg?style=flat-square)](https://www.npmjs.com/package/react-description-box)
[![Downloads](http://img.shields.io/npm/dm/react-description-box.svg)](https://www.npmjs.com/package/react-description-box)

====================

Customizable React component that can shorten long text using str_shorten library for better display

## Quickstart
Install the module with:
```
npm install --save react-description-box
```

## Getting Started
Import `DescriptionBox` to your React Component
```js
import DescriptionBox from 'react-description-box';
```
### Example
```js
let content = "You will win if you want";
<DescriptionBox maxChars='11' content={content}/>
```
The output will be
```
<div>You will...</div>
```

#### Customizable description box container
```javascript
<DescriptionBox maxChars='11'
  content="You will win if you want"
  component={(props) => {
    return (
      <ul>
        <li>
          {props.children}
        <li>
      </ul>
    )
  }}
/>
```
The generated HTML will be
```
<ul>
  <li>
    You will...
  </li>
</ul>
```

#### Add 'Read more' link
```javascript
<DescriptionBox maxChars='11'
  content="You will win if you want"
  readMore={{
    text: 'Read more',
    link: 'http://google.com'
  }}
/>
```
The generated HTML will be
```
<ul>
  <li>
    You will...
    <a href='http://google.com'>Read more</a>
  </li>
</ul>
```
## Options
| name         | default  | required | type     | description                                                                                                                |
|--------------|----------|----------|----------|-----------------------------------------------------------------------------------------------------------------|
| content      | empty       | false    | string   | Content of description box |
| maxChars     | 300      | false    | number   | Max characters of description box. |
| component     |  div component     | false    | React Component   | A function or class that generate component for the container |
| readMore     | null      | false    | object   | An object that contains: <br/> * text: Link text <br/> * link: Destination url |

## Development
### Fix issue with system watchers
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## Contributing
Contributions are welcome!

## Thanks

Thanks to the following repositories for code and inspiration:

- [React Component Boilerplate](https://github.com/survivejs/react-component-boilerplate)

## License
Copyright (c) 2018 Binh Quan

Licensed under the MIT license.
