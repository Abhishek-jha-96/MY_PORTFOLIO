"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Socials_data } from "../constants/social_media";

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h1 className="font-bold font-mono text-4xl pb-2">Socials</h1>
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full flex gap-10 items-center justify-between mx-4 my-4 sm:my-0">
          {Socials_data.map((data, index) => (
            <div key={index}>
              <Link href={data.social_login}>
                <Image src={data.path} width={70} height={70} alt={data.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
