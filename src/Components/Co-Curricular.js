import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";


class CoCurricular extends Component {
  constructor(props) {
    super(props);

    this.CoCurricular = props.CoCurricular;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="cocurricular">
        <div className="w-100">
          <h2 className="mb-5">Co-Curricular Activities</h2>
          <ul className="fa-ul mb-0">
          {
            this.CoCurricular.map((data, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faHandPointRight} color="#1976d2"/>
                <span className="ml-2"> {data.interest} </span>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default CoCurricular;
