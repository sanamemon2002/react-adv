import React, { Component } from 'react'

export class Classcomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [], 
          isLoading: true, 
          error: null, 
        };
      }
    
      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            this.setState({ data, isLoading: false });
          })
          .catch((error) => {
            this.setState({ error, isLoading: false });
          });
      }
  render() {
    const { data } = this.state;

    return (
      <div>
         <h2>Fetched Data</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.body}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Classcomp