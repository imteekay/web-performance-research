# Elements, children as props, and re-renders

The Component

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

With the scrollable feature

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

With the Element as an optimization

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
