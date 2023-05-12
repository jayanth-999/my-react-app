import React, { useState } from 'react';

function SampleComponent() {
    const [newObj, setNewObj] = useState({ prop1: 0, prop2: "" });
    const [newArr, setNewArr] = useState(["sample1", "sample2", "sample3"]);

    const handleClickObj = () => {
        const updatedObj = { ...newObj };
        updatedObj.prop1 = document.getElementById("prop1").value;
        updatedObj.prop2 = document.getElementById("prop2").value;
        setNewObj(updatedObj);
    }

    const handleClickArr = () => {
        const updatedArr = [...newArr];
        updatedArr.push(document.getElementById("arrValue").value);
        setNewArr(updatedArr);
    }
    return (
        <>
            <h2>New Object</h2>
            <label>Property 1: </label>
            <input type="number" id="prop1"></input>
            <br></br>
            <label>Property 2: </label>
            < input type="text" id="prop2" ></input >
            <br></br>
            <button onClick={handleClickObj}>Add Object</button>
            <br></br>
            <br></br>
            <h2>Array</h2>
            <label>Value: </label>
            <input type="text" id="arrValue" ></input >
            <br></br>
            <button onClick={handleClickArr}>Add Value to Array</button>
            <br></br>< br ></br >
            <h2>{JSON.stringify(newObj)}</h2>
            <h2>{JSON.stringify(newArr)}</h2>
        </>
    );
}

export default SampleComponent;
