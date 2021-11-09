import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";

const Counter = (props: { message: string }) => {
    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount(count => count + 1);
    };

    return (<>
        <h1>{props.message}</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Click me</button>
    </>)
};
(window as any).Counter = (props: any) => ReactDOM.render(<Counter {...props} />, document.getElementById("react-counter"))

// Export to be able to use in storybook
export default Counter;
