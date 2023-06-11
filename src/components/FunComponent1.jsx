import React, { useState } from "react";

// Custom hook for handling input elements
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return [value, handleChange];
};

// Component 1
const Component1 = () => {
    const [inputValue, setInputValue] = useInput("");

    return (
        <div>
            <input type="text" value={inputValue} onChange={setInputValue} />
            <p>Component 1: {inputValue}</p>
        </div>
    );
};

// Component 2
const Component2 = () => {
    const [inputValue, setInputValue] = useInput("");

    return (
        <div>
            <input type="text" value={inputValue} onChange={setInputValue} />
            <p>Component 2: {inputValue}</p>
        </div>
    );
};

export default function Apps() {
    return (
        <div>
            <Component1 />
            <Component2 />
        </div>
    );
}
