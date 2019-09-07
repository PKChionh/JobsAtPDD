import React from 'react';
import { Link } from 'react-router-dom';

export class CourseRegistration extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Course Registration</h1>

        <h3>Course Name</h3>
        <p>Half Day Course on Professional Conduct and Ethics for Professional Engineers</p>

        <h3>Course Price</h3>
        <p>$1000</p>

        <h3>Registrant Name</h3>
        <p>
          <input type="text"  />
        </p>

        <h3>Registrant NRIC</h3>
        <p>
          <input type="text" />
        </p>

        <button className="btn-block" onClick={this.btnSubmit}>Submit</button>


        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Date</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>

        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
    );
  }
}

export default CourseRegistration;