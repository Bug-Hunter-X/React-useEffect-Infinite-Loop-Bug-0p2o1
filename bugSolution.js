```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The dependency array is now empty which will only cause this to run once on mount. 
    // This prevents the infinite loop.
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me</button>
    </div>
  );
}
```