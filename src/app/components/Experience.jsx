"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const experience_data = [
  {
    "position": "Associate Software Engineer",
    "Company": "CodeMonk",
    "duration": "October 2024 – Present",
    "color_style": "rgb(71, 19, 150)",
    "summary": "Associate Software Engineer working as a Full-Stack Developer, building cloud-native web applications and scalable backend systems. I integrate AI and RAG-based solutions into production workflows, delivering intelligent features end to end. My work spans frontend, backend, and cloud infrastructure, with a growing focus on AI on the Edge and performance-aware systems."
  },
  {
    "position": "Backend Developer Intern",
    "Company": "CodeMonk",
    "duration": "April 2024 – September 2024",
    "color_style": "rgb(177, 59, 255)",
    "summary": "Design and development of backend systems and APIs, focusing on optimal code and regular refactoring. Participated in product discussions and meetings, also developing systems for other domains such as Machine Learning."
  },
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
