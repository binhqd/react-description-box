react-description-box
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

## Options
| name         | default  | required | type     | description                                                                                                                |
|--------------|----------|----------|----------|-----------------------------------------------------------------------------------------------------------------|
| content      | empty       | false    | string   | Content of description box |
| maxChars     | 300      | false    | number   | Max characters of description box. |

## Useful Links

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
