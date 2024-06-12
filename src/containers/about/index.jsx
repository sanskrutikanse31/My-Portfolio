import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Sanskruti Kanse",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "Amravati,Maharashtra,India",
  },

  {
    label: "Email",
    value: "sanskrutikanse123@gmail.com",
  },

  {
    label: "Contact No",
    value: "9359473746",
  },
];
const jobSummary =
  "Junior front-end software engineer focused on building accessible digital experiences.I Excel in designing and maintaining responsive websites with smooth user experience.Profile summary for software developers should concisely present their skills, experience, and expertise that highlight their qualifications for the job. This summary must include the developer's technical skills and the programming languages they are proficient";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(500px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
        < div className="about__content__servicesWrapper__innerContent">
          <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiApple size={60} color="var(--yellow-theme-main-color)" />
          </div>
        
        </div>
       </Animate>
      </div>
      </div>
    </section>
  );
};
export default About;
