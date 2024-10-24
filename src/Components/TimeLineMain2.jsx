import React from "react";
import { Timeline2 } from "./timeline2";
import { TextGenerateEffect } from "./text-generator";

export function TimelineDemo2() {
  const words1 = "Guests arrive and are seated for the second day of the event. Attendees prepare for the discussions and activities ahead.";
  const words2 = "A brief discussion or introductory session is conducted. This may set the tone for the day's workshops or activities.";
  const words3 = "A one-hour lunch break is provided. Participants can relax and socialize during this break.";
  const words4 = "Workshops or activities resume for further participation. Attendees engage in interactive sessions and group work.";
  const words5 = "A movie related to the event theme is screened for attendees. Participants enjoy the cinematic experience together.";
  const words6 = "The event is officially concluded with closing remarks. Final farewells and acknowledgments are made to the participants.";
  const data = [
    {
      title: "10:00 AM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            ARRIVAL OF GUESTS
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words1} />
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
      title: "10:20 AM TO 12:30 PM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            DISCUSSION FORUM
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words2} />
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
      title: "12:30 PM TO 1:30 PM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            LUNCH FOR GUESTS
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words3} />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/LU1.webp"
              alt="Student presentations"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
            <img
              src="/assets/images/LU2.webp"
              alt="Presentations"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "1:30 PM TO 3:30 PM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            ACTIVITIES & WORKSHOPS
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words4} />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/AC1.webp"
              alt="Networking session"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
            <img
              src="/assets/images/AC2.webp"
              alt="Networking and discussions"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "3:30 PM TO 5:30 PM",
      content: (
        <div>
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            MOVIE SCREENING
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words5} />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/images/MO1.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
            <img
              src="/assets/images/MO2.webp"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
            />
          </div>
        </div>
      ),
    },
    {
      title: "5:30 PM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            CONCLUSION & SEND OFF
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words6} />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img
              src="/assets/images/CO1.webp"
              alt="Thank you speech"
              className="rounded-lg object-cover h-40 sm:h-44 md:h-60 lg:h-72 w-full shadow"
            />
            <img
              src="/assets/images/CO2.webp"
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
      <Timeline2 data={data} />
    </div>
  );
}
