import React from 'react'
import { SiWebpack,SiTailwindcss,SiJavascript } from "react-icons/si";
import { FaReact,FaGithub } from 'react-icons/fa';
import { DiSass } from "react-icons/di";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <FaReact />

            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data">
            <DiSass />

            <div>
              <h3 className="skills__name">Sass</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiTailwindcss />

            <div>
              <h3 className="skills__name">Tailwind</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiJavascript />

            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiWebpack />

            <div>
              <h3 className="skills__name">Webpack</h3>
            </div>
          </div>

          <div className="skills__data">
            <FaGithub />

            <div>
              <h3 className="skills__name">Github</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Frontend
