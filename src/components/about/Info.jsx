import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
        <i class='bx bxs-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Intenship at Fiocruz</span>
      </div>

      <div className="about__box">
        <i class='bx bx-code-alt about__icon'></i>
        <h3 className="about__title">Bootcamp</h3>
        <span className="about__subtitle">le wagon bootcamp in 2022</span>
      </div>

      <div className="about__box">
        <i class='bx bxs-graduation about__icon' ></i>
        <h3 className="about__title">Academic</h3>
        <span className="about__subtitle">scientific initiation scholarship holder</span>
      </div>

    </div>
  )
}

export default Info
