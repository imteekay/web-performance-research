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
