import React from "react";
import { Timeline } from "./timeline";
import { TextGenerateEffect } from "./text-generator";

export function TimelineDemo() {
  const words1 = "Guests arrive and are welcomed by the University.";
  const words2 = "Introduction by the Dean and key speakers.";
  const words3 = "Students present their work, followed by a Q&A session.";
  const words4 = "Time to network and build connections with other guests and students.";
  const words5 = "A formal thank you speech to conclude the event and a look forward to future collaborations.";

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
      title: "10:30 AM TO 11:00 AM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            INAUGURAL
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
      title: "11:00 AM TO 1:00 PM",
      content: (
        <div className="">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-6">
            ACTIVITIES & WORKSHOPS
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words3} />
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
            LUNCH FOR GUESTS
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words4} />
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
            ACTIVITIES & WORKSHOPS
          </h1>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
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
            STAGE ACTIVITIES
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-8 max-w-4xl mx-auto">
            <TextGenerateEffect words={words5} />
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
