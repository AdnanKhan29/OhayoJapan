import React from "react";
import { Timeline } from "./timeline";
import { TextGenerateEffect } from "./text-generator";
import { useTranslation } from "react-i18next";
export function TimelineDemo() {
  const { t } = useTranslation();
  const data = [
    {
      title: "10:00 AM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
          {t("guestsArrivalTitle")}
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={t("guestsArrivalDesc")} />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/101.webp"
              alt="Arrival of guests"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
            <img
              src="/assets/images/103.webp"
              alt="Guests being welcomed"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "10:30 AM TO 11:00 AM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
          {t("inauguralTitle")}
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={t("inauguralDesc")} />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/10am.webp"
              alt="Inaugural session"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
            <img
              src="/assets/images/102.webp"
              alt="Dean's speech"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "11:00 AM TO 1:00 PM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
          {t("activitiesWorkshopsTitle")}
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={t("activitiesDesc")} />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/AC1.webp"
              alt="Student presentations"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
            <img
              src="/assets/images/AC2.webp"
              alt="Presentations"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "1:00 PM TO 1:30 PM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
          {t("lunchTitle")}
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={t("lunchDesc")}/>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/LU1.webp"
              alt="Networking session"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
            <img
              src="/assets/images/LU2.webp"
              alt="Networking and discussions"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "1:30 PM TO 3:30PM",
      content: (
        <div>
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            {t("afternoonWorkshopsTitle")}
          </h1>

          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={t("afternoonWorkshopsDesc")} />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/images/AC3.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="/assets/images/AC4.webp"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="/assets/images/AC5.webp"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="/assets/images/AC6.webp"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "3:30 PM to 5:30 PM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
          {t("stageActivitiesTitle")}
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={t("stageActivitiesDesc")} />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/ST1.webp"
              alt="Thank you speech"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
            <img
              src="/assets/images/ST2.webp"
              alt="Future collaborations"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
