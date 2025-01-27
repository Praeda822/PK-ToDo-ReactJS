// ===============
//   useEffect()
// ===============

// useEffect() is a React Hook that tells React to DO THIS CODE WHEN (pick one:)'
//          The component is first rendered and/or re-rendered
//          The component mounts
//          The state of a value changes

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount (initial render)
// 3. useEffect(() => {}, [value])  // Runs on mount and when value changes

// USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts
