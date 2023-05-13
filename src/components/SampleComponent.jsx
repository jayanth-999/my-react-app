import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SampleComponent = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
};

export default SampleComponent;
