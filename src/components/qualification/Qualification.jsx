import React from 'react';
import './qualification.css';

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content
          qualification__content-active">

          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Bootcamp</h3>
                <span className="qualification__subtitle">Le Wagon</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
          </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Science</h3>
                <span className="qualification__subtitle">FGV-EMAP</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Applied Mathematics</h3>
                <span className="qualification__subtitle">UFF</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className="qualification__content">

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Internship</h3>
                <span className="qualification__subtitle">Oswaldo Cruz Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  01/2022 - 12/2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
