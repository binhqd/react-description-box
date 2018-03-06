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
```jsx
import DescriptionBox from 'react-description-box';
```
### Example
```jsx
<DescriptionBox maxChars='11' content="You will win if you want"/>
```

## Options

## Useful Links

## Contributing
Contributions are welcome!

### Fix issue with system watchers
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
## Thanks

Thanks to the following repositories for code and inspiration:

- [React Component Boilerplate](https://github.com/survivejs/react-component-boilerplate)
