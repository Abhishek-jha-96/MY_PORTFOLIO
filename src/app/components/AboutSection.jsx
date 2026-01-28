"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className=" flex gap-2 flex-wrap">
        <Image
          src="/skills/python.png"
          width={48}
          height={48}
          alt="python"
        ></Image>

        <a target="_blank" href="https://icons8.com/icon/40669/c%2B%2B">
          <Image
            src="/skills/c++.png"
            width={48}
            height={48}
            alt="C++"
          ></Image>
        </a>

        <a target="_blank" href="https://icons8.com/icon/108784/javascript">
          <Image
            src="/skills/javascript.png"
            width={48}
            height={48}
            alt="C++"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/skills/typescript.png"
            width={48}
            height={48}
            alt="C++"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/skills/reactjs.png"
            width={48}
            height={48}
            alt="React"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/skills/redux.png"
            width={48}
            height={48}
            alt="Redux"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/skills/nodejs.png"
            width={48}
            height={48}
            alt="NodeJS"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/skills/django.png"
            width={48}
            height={48}
            alt="dJANGO"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/skills/tailwind.png"
            width={48}
            height={48}
            alt="tailwind"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/skills/postgresql.png"
            width={48}
            height={48}
            alt="PostgreSQL"
          ></Image>
        </a>

        <a
          target="_blank"
          href="https://icons8.com/icon/uJM6fQYqDaZK/typescript"
        >
          <Image
            src="/skills/aws.png"
            width={48}
            height={48}
            alt="AWS"
          ></Image>
        </a>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelor’s of Technology in Electronics and Communication (MAIT)
        </li>
      </ul>
    ),
  },
  {
    title: "Course-Work",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud</li>
        <li>Machine Learning</li>
        <li>DBMS</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a Full-Stack Software Engineer building scalable, high-performance web systems using 
            TypeScript, Python, and Rust/C++, with AI-driven features across the stack. My work spans 
            modern frontends, backend APIs, and data pipelines, with a growing focus on AI on the Edge, 
            systems programming, and performance-critical workloads.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Course-Work{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
