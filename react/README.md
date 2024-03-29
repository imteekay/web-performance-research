# Elements, children as props, and re-renders

## The Component

A component with many slow children components

```js
const App = () => {
  return (
    <div className="scrollable-block">
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};
```

## With the scrollable feature

Re-rendering all slow children components

```js
const MainScrollableArea = () => {
  const [position, setPosition] = useState(300);
  const onScroll = (e) => {
    const calculated = getPosition(e.target.scrollTop);
    setPosition(calculated);
  };

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <MovingBlock position={position} />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
};
```

## With the Element as an optimization

Because the slow components are not part of the same component that re-renders, they are outside the re-rendered component, that way they will be intacted, without the unnecessary re-render.

```js
const App = () => {
  const slowComponents = (
    <>
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );

  return <ScrollableWithMovingBlock content={slowComponents} />;
};
```

```js
const ScrollableWithMovingBlock = ({ content }) => {
  const [position, setPosition] = useState(300);
  const onScroll = (e) => {
    const calculated = getPosition(e.target.scrollTop);
    setPosition(calculated);
  };

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <MovingBlock position={position} />
      {content}
    </div>
  );
};
```

## Element as children

Instead of having a content prop, use the special children prop to pass children components

```js
const App = () => {
  return (
    <ScrollableWithMovingBlock>
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </ScrollableWithMovingBlock>
  );
};
```

```js
const ScrollableWithMovingBlock = ({ children }) => {
  const [position, setPosition] = useState(300);
  const onScroll = (e) => {
    const calculated = getPosition(e.target.scrollTop);
    setPosition(calculated);
  };

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <MovingBlock position={position} />
      {children}
    </div>
  );
};
```

## Key takeaways

- A Component is just a function that accepts an argument (props) and returns Elements that should be rendered when this Component renders on the screen. `const A = () => <B />` is a Component.
- An Element is an object that describes what needs to be rendered on the screen, with the type either a string for DOM elements or a reference to a Component for components. `const b = <B />` is an Element.
- Re-render is just React calling the Component's function.
- A component re-renders when its element object changes, as determined by Object.is comparison of it before and after re-render.
- When elements are passed as props to a component, and this component triggers a re-render through a state update, elements that are passed as props won't re-render.
- "children" are just props and behave like any other prop when they are passed via JSX nesting syntax:

# Configuration concerns with elements as props

```js
const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // when is this one going to be rendered?
  const footer = <Footer />;

  return isDialogOpen ? <ModalDialog footer={footer} /> : null;
};
```

- `footer` will be created as an element and stored in memory.
- This Footer will actually be rendered only when it ends up in the return object of one of the components, not sooner.

# Memoization with useMemo, useCallback and React.memo

Comparing values in JS

```js
const a = 1;
const b = 1;

a === b; // true
```

Comparing objects in JS:

```js
const a = { id: 1 };
const b = { id: 1 };

a === b; // false
```

When comparing objects, we are not comparing values, we are comparing references.
