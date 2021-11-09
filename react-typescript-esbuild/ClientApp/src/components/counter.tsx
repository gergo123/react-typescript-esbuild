import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import "../../index.css"

const Counter = (props: { message: string }) => {
    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount(count => count + 1);
    };

    return (<div className="mx-auto max-w-max font-serif bg-gray-100 rounded-xl shadow-md p-6">
        <h1 className="text-xl font-medium text-black">{props.message}</h1>
        <div className="my-2 text-center text-gray-500">Count: {count}</div>
        <button
            className="font-mono rounded bg-green-500 shadow-lg px-8 min-w-full py-2 font-bold text-2xl text-green-50  hover:bg-green-400 active:bg-green-700"
            onClick={increment}
        >
            Click me
        </button>
    </div>)
};
(window as any).Counter = (props: any) => ReactDOM.render(<Counter {...props} />, document.getElementById("react-counter"))

// Export to be able to use in storybook
export default Counter;
