# React.js

Hello World!

```js
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
```

## JSX

JSX is Javascript XML, any valid JS expression can be insert inside the curly braces in JSX.

```js
const name = "Seb Blais";
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

Quotes can be use to specify string literals as attributes:

```js
const element = <div tabIndex="0" />;
```

Curly braces can be use to embed JS expression in a attribute:

```js
const element = <img src={user.avatarUrl} />;
```

Use camelCase for property naming, Ex: class => className.

JSX can use self closing tags.

```js
const element = <img src={user.avatarUrl} />;
```

## Rendering Elements

The JSX expression represent 'React elements'. Don't confuse elements with components. Elements are the block that build the compoments.

React elements are immutable, once create you can't change its children or attributes.

### Conditional Rendering

Conditional Rendering can my make with if statement, ternary operation or && operator.
If a JSX tag evaluate to false, null or undefined it will not be show in the DOM.

```js
const user = {
  name: "Seb Blais",
  age: 21,
  location: "Montreal"
};

function getLocation() {
  if (!user.location) {
    return "Unknow";
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
);

ReactDOM.render(element, document.getElementById("root"));
```

### Events and Attributs

React events are named camelCase, JSX pass function as the event handler.
preventDefault most be call explicitly to prevent the default Behavior.

```js
function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}

<button onClick={handleClick}>Activate Lasers</button>;
```

### List and Keys

JSX list item can be generate with .map() fonction. Keys help React to identify which items have changed.

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => <li key={number.id}>{number}</li>);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

### Data Binding

### Form and Inputs Controlled Components

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## Components

Components let you split the UI into independent, reusable pieces that can stand in isolation. Components takes 'props' than return React elements. Components can refer to other components in their output.

### functional Component

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// full functional Component single file
import React from "react";

const Action = props => (
  <div>
    <button
      className="lg-btn"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);

export default Action;
```

### Class Component

```js
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    // binding of the function to reference the proper context
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <Welcome name="Sebastien" />
        <h1>Welcome!</h1>;
        <button onClick={handleClick} />
      <div>
    )
  }
}
```

### Pure Components

Performance-optimized version of React.Component. Doesn’t rerender if props/state hasn’t changed.

```js
class MessageBox extends React.PureComponent {
  ···
}
```

### Controlled Component

A controlled component is a component where React is in control and is the single source of truth for the form data.

### Uncontrolled Component

An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.

### Pros

Props stand for properties, they are Read-only. All React components must
act like pure functions with respect to their props.

- An Object
- Can be used when rendering
- Change from above cause re-renders
- Comes from above
- Can't be changed by component itself

```js
// parent component
class Parent extends React.component {
  render() {
    const childName = "childComponent"

    return (
      <div>
        <Child name={childName}/>
      <div />
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <p>My name is : {this.props.name}</p>
      </div>
    );
  }
}
```

### State

The state is the stage of the information contain by the component.

The state should only be change using .setState({})

Call make to .setState() are async, to avoid that problem we use function as the first param of .setState(prevState => {})

- An Obeject
- Can be used when rendering
- Changes cause re-renders
- Define in the component itself
- Can be changed by component itself

```js
// Wrong
this.state.comment = "Hello";

// Correct
this.setState({ comment: "Hello" });
```

The Counter example

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1;
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
      </div>
    )
  }
}
```

### Stateless Components

## Lifecycle

React's rendering executes in three different intervals: Mounting, Updating, Unmounting.

### Mounting

- constructor()

  Initialization of the state of the component, super(props) get called so the constructor() function has access to this.props.

* componentWillMount()

  This is called before render(). So setting state or deitin props will not cause re-render().

* render()

* componentDidMount()

  Will ba call directly after render(), setting state or editing any props will cause a re-render().

### Updating

The methods in the 'Updated' interval are conditional on the change in data.

- componentWillReceiveProps(nextProps)

  This methods is invoked before data (props or state) actually change. This function can be call if data don't change if his parent re-render().

- shouldComponentUpdate(nextProps, nextState)

  React will re-render whenever props or state change within a component(s). This method will let React know that the component’s output is not affected by the change in data (props and/or state). This method is invoked before re-rendering after new props and/or state are being received.

* componentWillUpdate()

  This method fires before the re-rendering with new props/state. React teaches that this is a good place to prepare your component for the new data that is coming through. Note that you cannot call this.setState() here.

* render()

* componentDidUpdate(prevProps, prevState)

  This method fires after the re-render occurs. This is the place to access or re-access the browser DOM.

### Unmount

- componentWillUnmount()

  This method is fired immediately before a component is unmounted and destroyed.

# Redux

Redux is a predictable state container for JS apps.

## Actions

Actions are payloads of information sending data from the app View to the store.
Actions are send to the store using `store.dispatch()`.

```js
const ADD_TODO = "ADD_TODO";

{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

### Actions Creators

Actions creators are function that craete actions.

```js
function addTodo(text) {
  // actions
  return {
    type: ADD_TODO, // type of action
    text, // payload
    todoId,
    morePayload
  };
}
```

## Reducers

Reducers specify how the application's state changes in response to actions sent to the store. The Actions discribe 'what happened', but don't describe how the applications state changes.

THe reducer is a pure function that takes the previous state and an action, and returns the next state.

```js
(previousState, action) => newState;
```
