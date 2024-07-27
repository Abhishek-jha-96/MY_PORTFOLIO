"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const experience_data = [
  {
    "position": "Backend Developer Intern",
    "Company": "CodeMonk",
    "duration": "April 2024 – Present",
    "color_style": "rgb(190, 49, 68)",
    "summary": "Design and development of backend systems and APIs, focusing on optimal code and regular refactoring. Participated in product discussions and meetings, also developing systems for other domains such as Machine Learning."
  },
  {
    "position": "App Development Intern",
    "Company": "AnchorIT solution",
    "duration": "july 2023 – September 2023",
    "color_style": "rgb(129, 12, 168)",
    "summary": "Assisted in the development of an App that lets user create a custom page to put all their social media and business links."
  },
  {
    "position": "Web Development Intern",
    "Company": "Ministry of Housing and Urban Affairs",
    "duration": "April 2023 - June 2023",
    "color_style": "rgb(190, 49, 68)",
    "summary": "Developed/Designed a service website for govt Scheme to help the beneficiaries register through the web."
  }
]

const Experience = () => {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Experience
      </h2>

      <VerticalTimeline>
      {experience_data.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: experience.color_style, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid ${experience.color_style}` }}
            date={experience.duration}
            iconStyle={{ background: experience.color_style, color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">{experience.position}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.Company}</h4>
            <p>{experience.summary}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
