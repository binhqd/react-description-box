### Usage
```javascript
<DescriptionBox maxChars='11' content="You will win if you want"/>
```
The output will be
```react
<DescriptionBox maxChars='11' content="You will win if you want"/>
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
        </li>
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
And the output will be
```react
<DescriptionBox maxChars='11'
  content="You will win if you want"
  component={(props) => {
    return (
      <ul>
        <li>
          {props.children}
        </li>
      </ul>
    )
  }}
/>
```
