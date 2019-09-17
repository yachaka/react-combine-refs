# react-combine-refs
Creates a new ref callback, that updates ref arguments.
A ref argument can be **a function** or **an object with a .current property**.

```js
import combineRefs from 'react-combine-refs';

function MyComponent(
  props,
  refProp,
) {
  const myCustomRef = useRef(null);
  
  // ...
  
  return (
    <div ref={combineRefs(refProp, myCustomRef)}>
      // ...
    </div>
  );
}
```
