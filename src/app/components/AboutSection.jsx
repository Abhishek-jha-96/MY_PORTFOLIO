"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AWSIcon from "./icons/aws";
import AzureIcon from "./icons/azure";
import GitIcon from "./icons/git";
import GithubIcon from "./icons/github";
import DockerIcon from "./icons/docker";
import PostgreqlIcon from "./icons/postgreql";
import MongoIcon from "./icons/mongodb";
import DjangoIcon from "./icons/django";
import NestJsIcon from "./icons/nestJs";
import NodeJsIcon from "./icons/nodeJs";
import FastapiIcon from "./icons/fastapi";
import ReactjsIcon from "./icons/reactjs";
import ReduxIcon from "./icons/redux";
import TailwindcssIcon from "./icons/tailwindcss";
import PythonIcon from "./icons/pythonIcon";
import JavaScriptIcon from "./icons/javaScript";
import TypeScriptIcon from "./icons/typeScript";
import CPPIcon from "./icons/c++";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-col gap-6">
        {/* Programming Languages */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            <PythonIcon />
            <JavaScriptIcon />
            <TypeScriptIcon />
            <CPPIcon />
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            <ReactjsIcon />
            <ReduxIcon />
            <TailwindcssIcon />
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Backend</h3>
          <div className="flex flex-wrap gap-3">
            <DjangoIcon />
            <FastapiIcon />
            <NestJsIcon />
            <NodeJsIcon />
          </div>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Databases
          </h3>
          <div className="flex flex-wrap gap-3">
            <PostgreqlIcon />
            <MongoIcon />
          </div>
        </div>

        {/* DevOps & CI/CD */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            DevOps & CI/CD
          </h3>
          <div className="flex flex-wrap gap-3">
            <DockerIcon />
            <GitIcon />
            <GithubIcon />
          </div>
        </div>

        {/* Cloud */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Cloud</h3>
          <div className="flex flex-wrap gap-3">
            <AWSIcon />
            <AzureIcon />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-white">
              Bachelor of Technology (Electronics & Communication)
            </h3>
            <span className="text-sm text-gray-400">2020 – 2024</span>
          </div>
          <p className="text-sm text-gray-300 mt-1">
            Maharaja Agrasen Institute of Technology (MAIT)
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Course-Work",
    id: "certifications",
    content: (
      <div className="space-y-4">
        {/* Cloud Computing */}
        <div>
          <h3 className="text-sm font-semibold text-white">
            Cloud Computing (AWS & Azure)
          </h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            Core cloud concepts, IAM, compute, storage, networking, and
            deploying scalable services on AWS and Azure.
          </p>
        </div>

        {/* GenAI & LLMs */}
        <div>
          <h3 className="text-sm font-semibold text-white">
            Generative AI & Large Language Models
          </h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            Fundamentals of LLMs, embeddings, prompt engineering, vector
            databases, and building AI-powered applications.
          </p>
        </div>

        {/* Full-Stack Development */}
        <div>
          <h3 className="text-sm font-semibold text-white">
            Full-Stack Web Development
          </h3>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            End-to-end web development using modern frontend frameworks, backend
            APIs, databases, and authentication flows.
          </p>
        </div>
      </div>
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
            I&apos;m a Full-Stack Software Engineer building scalable,
            high-performance web systems using TypeScript, Python, and Rust/C++,
            with AI-driven features across the stack. My work spans modern
            frontends, backend APIs, and data pipelines, with a growing focus on
            AI on the Edge, systems programming, and performance-critical
            workloads.
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
