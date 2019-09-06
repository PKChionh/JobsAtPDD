import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    todos: [],
    error: null,
    isLoaded: false,
    items: [],
    
    temp: 0,
    desc: '',
    icon: '',
    loading: true,

    courseTitle: '',
    courses: []
  }



  componentDidMount() {

    fetch('https://mock-public-api.ssg-wsg.sg/courses/directory')
    .then(response => response.json())
    .then(responseData => {
      this.setState({
//        courseTitle: responseData.data.courses[0].title
          courses: responseData.data.courses

      })
      // console.log(this.state.courseTitle);
    })
    .catch(err => console.error(err));

/*    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Singapore&units=Metric&APIkey=0118f6d52f346cba4d3b2d01011680f8')
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        temp: responseData.main.temp,
        desc: responseData.weather[0].description,
        icon: responseData.weather[0].icon,
        loading: false
      })
    })
    .catch(err => console.error(err));
*/

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
/*    
   fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
*/  
  }  

  render() {

    return(
      <div className="container">
        <h1>Courses@PDD</h1>

        {this.state.courses.map((list) => (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{list.title}</h4>
            <h5 className="card-subtitle mb-2 text-muted">
              {list.trainingProviderAlias}
            </h5>
            <h6 className="card-text sm-6">
              {list.objective}
            </h6>
            <button color='blue'>Register</button>
          </div>
        </div>
        ))}


      </div>
    );


  }
}

export default App;


//~~~ OpenWeatherMap.Org ~~~
/*
    const imgSrc = 'http://openweathermap.org/img/w/' + 
                    this.state.icon + '.png';
    
    if (this.state.loading) {
      return <p>Loading</p>
    }
    else{
      return (
        <div className='App'>
          
        </div>
      );
    }

    
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
   œ           <span>
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
*/


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
