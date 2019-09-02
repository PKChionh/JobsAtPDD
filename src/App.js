import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: [],
    error: null,
    isLoaded: false,
    items: []    
  }

  componentDidMount() {

//~~~ Axios ~~~    
/*
    axios.get("https://jsonplaceholder.typicode.com/todos").then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      );
*/
//~~~ Fetch ~~~      
    
   fetch('http://jsonplaceholder.typicode.com/todos')
    // fetch('https://mock-public-api.ssg-wsg.sg/courses/directory')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
    
  }  

  render() {
    return (
      <div className="container">
      <div className="col-xs-12">
      <h1>Jobs@PDD</h1>
      
      {this.state.todos.map((todo) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
            { todo.completed &&
              <span>
              Completed
              </span>
            }
            { !todo.completed &&
              <span>
                Pending
              </span>
            }              
            </h6>
          </div>
        </div>
      ))}
      

      </div>
     </div>
    );
  }
}

export default App;

/*
      {this.state.items.map(todo => ( 
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
            { todo.completed &&
              <span>
              Completed
              </span>
            }
            { !todo.completed &&
              <span>
                Pending
              </span>
            }              
            </h6>
          </div>
        </div>
      ))}


*/

/*
      <div className="container">
      <div className="col-xs-12">
      <h1>My Todos</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Example Todo</h5>
            <h6 className="card-subtitle mb-2 text-muted">Completed</h6>
          </div>
        </div>
      </div>
     </div>

*/

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
