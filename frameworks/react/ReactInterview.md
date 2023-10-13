## What is React.js ?

React is a View layer library build by Facebook to build UI.

## How do React work ?

React creates a virtual DOM, when the state of a component change it update the virtual DOM then it update the DOM.

## What is JSX ?

JSX is a shorthand for JS XML, that allow the developer to type HTML like template that can include JS expression.

## What’s the difference between an Element and a Component in React?

Element : The React Element is the representation of of the UI build with JSX.

Component : The React Component is a function or a class which optionally accepts input and returns React Element.

## What happens when you call setState?

## When would you use a Class Component over a Functional Component?

If the component have a state or a lifecycle methods(s), use the class component. Otherwise, for stateless component just to render JSX use Functional component.

## What are refs in React and why are they important?

Refs are an escape hatch which allow you to get direct access to a DOM element or an instance of a component.

```js
class UnControlledForm extends Component {
  handleSubmit = () => {
    console.log("Input Value: ", this.input.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={input => (this.input = input)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

## What are keys in React and why are they important?

Keys help React to identify which items have changed in a list.

```js
ender () {
  return (
    <ul>
      {this.state.todoItems.map(({task, uid}) => {
        return <li key={uid}>{task}</li>
      })}
    </ul>
  )
}
```

## Describe how events are handled in React ?

In order to solve cross browser compatibility issues, your event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. React will listen to all events at the top level using a single event listener for better performance.

## What is the difference between createElement and cloneElement?

createElement is what JSX gets transpiled to and is what React uses to create React Elements.

cloneElement is used in order to clone an element and pass it new props.

## What is the second argument that can optionally be passed to setState and what is its purpose?

A callback function which will be invoked when setState has finished and the component is re-rendered.
