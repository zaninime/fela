# createComponentWithProxy

Sometimes you need/want to pass all the props the to child element but doesn't know them all except the one you use in your rules. `createComponentWithProxy`allow you to pass all the props to the child by default except the props used in the rules.

> Note, does not work in browsers that lack [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) (like IE 11)

## Usage

This can be used in different cases:
- When you don't know exactly all the props you need to pass to the child.
- If you writing a lib on top of fela and need the component to receive props without forcing the user to specify which props.

## Imports
```javascript
import { createComponentWithProxy } from '@fela-next/react-fela'
import { createComponentWithProxy } from '@fela-next/preact-fela'
import  { createComponentWithProxy } from '@fela-next/inferno-fela'
```

## Example
```javascript
const title = ({ fontSize, small, color }) => ({
  lineHeight: small ? 1.2 : 1.5,
  fontSize: fontSize + 'px',
  color: color
})

const Title = createComponentWithProxy(title, 'div')

<Title fontSize={23} color='red' data-id="foo" onClick={...}>Hello World</Title>
// => <div className="a b c" data-id="foo" onclick="...">Hello World</div>
```

## Tips

Sometimes you need to be able to use a props in your rules and still pass it to the child. That's why `passThroughProp` is still available in `createComponentWithProxy`. Any props pass in the `passThroughProp` will be pass to the child even if you use it in your rules's component.

## Example
```javascript
const input = ({ disabled, fontSize, color }) => ({
  fontSize: fontSize + 'px',
  color: disabled ? 'grey' : color
})

const Input = createComponentWithProxy(input, 'input', [ 'disabled' ])


<Input fontSize={23} color='red' disabled />
// => <input className="a b" disabled></input>
```

## Related

- [Recipe - Explicit Component displayName](../../recipes/DisplayNameComponents.md)
- [API Reference - `createComponent`](createComponent.md)
