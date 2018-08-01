# React.js

Hello World!
```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

## JSX

JSX is Javascript XML, any valid JS expression can be insert inside the curly braces in JSX. 

```
const name = 'Seb Blais';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
``` 
Quotes can be use to specify string literals as attributes: 
```
const element = <div tabIndex="0"></div>;
```

Curly braces can be use to embed JS expression in a attribute:
```
const element = <img src={user.avatarUrl}></img>;
```

Use camelCase for property naming, Ex: class => className.

JSX can use self closing tags.
```
const element = <img src={user.avatarUrl} />;
```

## Rendering Elements

The JSX expression represent 'React elements'. Don't confuse elements with components. Elements are the block that build the compoments.

React elements are immutable, once create you can't change its children or attributes.

### Conditional Rendering

Conditional Rendering can my make with if statement, ternary operation or && operator.
If a JSX tag evaluate to false, null or undefined it will not be show in the DOM.

```
const user = {
  name: 'Seb Blais',
  age: 21,
  location: 'Montreal'
}

function getLocation() {
  if (!user.location) {
    return 'Unknow';
  }
  return user.location;
}
const element = <h1>Hello, {user.name}</h1>;

const template = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.getLocation()}</p>
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### Events and Attributs

React events are named camelCase, JSX pass function as the event handler.
preventDefault most be call explicitly to prevent the default Behavior.

```
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

<button onClick={handleClick}>
  Activate Lasers
</button>
```
### List and Keys

JSX list item can be generate with .map() fonction. Keys help React to identify which items have changed.

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.id}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
### Data Binding



### Form and Inputs Controlled Components



```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## Components

Compoents let you split the UI into independent, reusable pieces that can stand in isolation. Components takes 'props' than return React elements. Components can refer to other components in their output.

### functional Component
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
### Class Component
```
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Sebastien" />
        <h1>Welcome!</h1>;
      <div>
    )
  }
}
```

### Pure Components 

Performance-optimized version of React.Component. Doesn’t rerender if props/state hasn’t changed.

```
class MessageBox extends React.PureComponent {
  ···
}
```

### Pros

Props stand for properties, they are Read-only. All React components must
act like pure functions with respect to their props.

### State



### Stateless Components


## Lifecycle


### Mounting

### Updating
