"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Experience
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(129, 12, 168)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="july 2023 – September 2023"
          iconStyle={{ background: "rgb(129, 12, 168)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">App Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">AnchorIT solution</h4>
          <p>
          Assisted in the development of an App that lets user create a custom page to put all their social media and business links
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(190, 49, 68)", color: "#fff"}}
          className="vertical-timeline-element--education"
          date="April 2023 - June 2023"
          iconStyle={{ background: "rgb(190, 49, 68)", color: "#fff" }}
          icon=''
        >
          <h3 className="vertical-timeline-element-title">
          Web Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Ministry of Housing and Urban Affairs
          </h4>
          <p> Developed/Designed a service website for govt Scheme to help the beneficiaries register through the web.</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
