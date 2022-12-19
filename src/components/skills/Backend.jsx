import React from 'react'
import { SiPostgresql,SiPython,SiNodedotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiGoland } from "react-icons/si";
import { GoRuby } from "react-icons/go";

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend</h3>

    <div className="skills__box">
      <div className="skills__group">

        <div className="skills__data">
          <GoRuby />

          <div>
            <h3 className="skills__name">Rails</h3>
          </div>
        </div>

        <div className="skills__data">
          <SiPython />

          <div>
            <h3 className="skills__name">Python</h3>
          </div>
        </div>

        <div className="skills__data">
          <SiPostgresql />

          <div>
            <h3 className="skills__name">Postgresql</h3>
          </div>
        </div>

        <div className="skills__data">
          <SiGoland />

          <div>
            <h3 className="skills__name">Golang</h3>
          </div>
        </div>

        <div className="skills__data">
          <FaGitAlt />

          <div>
            <h3 className="skills__name">Git</h3>
          </div>
        </div>

        <div className="skills__data">
          <SiNodedotjs />

          <div>
            <h3 className="skills__name">Node.js</h3>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Backend
