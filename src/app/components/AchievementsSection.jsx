"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      Socials
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-wrap gap-10 items-center justify-center mx-4 my-4 sm:my-0">
          <div>
            <Link href="https://github.com/Abhishek-jha-96/">
              <Image
                src="/github-icon.svg"
                width={70}
                height={70}
                alt="Github Icon"
              />
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/abhishek-jha-670208204">
              <Image
                src="/linkedin-icon.svg"
                width={70}
                height={70}
                alt="Linkedin Icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
