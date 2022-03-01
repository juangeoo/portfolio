import React from 'react'
import "./About.css"

const About = () => {
  return (

    <div id="about" className="about-container">
        <h1 className="about-h1">About</h1>
    <div className="about-info-container">
        <div className="about-p-container">
            <p className="about-p">I am a web designer and junior front end developer based in Buenos Aires. I specialize in creating creative and modern web experiences. I like to work as much as a team as an individual. I am about listening to ideas and
            proposing. If there is a project that interests me, I like to dedicate the
            time necessary for it to come out as best as possible. </p>
        </div>
        <div className="about-p-container">
            <h2 className="about-h2">Education</h2>
            <p className="about-p"><b>Colegio Norbridge.</b> Bilingual high school with orientation in humanities. English title ICE of the IGCSE exams. (2001-2016)</p><br></br>
            <p className="about-p"><b>UADE.</b> Completed the technical and bachelor's degree in Multimedia Design and Interaction at the Universidad Argentina de la Empresa (UADE) (2017-2021)</p>
        </div>

        <div className="sa-container">
            <div className="about-skills">
                <h2 className="about-h2">Skills</h2>
                <ul className="about-p about-list">
                    <li>UX/UI Design</li>
                    <li>Front End Development</li>
                    <li>Graphic Design</li>
                    <li>Visual Design</li>
                    <li>Prototyping</li>
                    <li>3D Modelling/Renders</li>
                    <li>English / Spanish</li>
                </ul>
            </div>
            <div className="about-tools">
                <h2 className="about-h2">Tools</h2>
                <div className="about-tools_container">
                <div>
                    <p className="about-p-title">Development</p>
                    <ul className="about-p about-list">
                        <li>HTML/CSS/JS</li>
                        <li>SASS</li>
                        <li>React JS</li>
                        <li>Visual Studio Code</li>
                        <li>Wordpress</li>
                     </ul>
                
               
                    <p className="about-p-title">Design</p>
                    <ul className="about-p about-list">
                        <li>Figma</li>
                        <li>Adobe: <span>Photoshop, Illustrator, After Effects, Premiere</span></li>
                        <li>Blender</li>
                     </ul>
  </div>
            </div>
        </div>
        </div>
    </div>
    </div>

  )
}

export default About