import axios from 'axios';
import { Component } from 'react';

class GetApi extends Component {
    state = { data: [] }

   
    fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({ data: response.data });
    }

   
    postData = (item) => {
        axios.post('https://jsonplaceholder.typicode.com/users', item)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <h2>Getting names from mockserver</h2>
                <button onClick={this.fetchData}>Fetch Data</button>
                <ul>
                    {data.map((item) =>
                        <li key={item.id}>
                            {item.name}- 
                            <button onClick={() => this.postData(item)}>Send Data</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default GetApi;
