import { useNavigate } from "react-router-dom";
import { PinContainer } from "./PinContainer";
import { HyperText } from "./HyperText";
export function Activity() {
  const navigate = useNavigate();

  const handleClick = (pin) => {
    navigate(`/project/${pin.title}`, { state: { ...pin } });
  };

  const Yukata = {
    title: "Yukata Fashion Walk",
    description:
      " A Yukata Fashion Walk is a cultural and fashion event where participants wear yukatas—a traditional, casual Japanese garment—and perform a ramp walk, similar to a fashion show. ",
    image: "/assets/images/IM1.webp", // Placeholder image URL
  };

  const Karaoke = {
    title: "Karaoke Performance",
    description:
      "A Karaoke Performance is a fun and interactive event where participants sing along to popular songs, with lyrics displayed on a screen. This activity is a popular form of entertainment in Japan and has become a global sensation. ",
    image: "/assets/images/IM2.webp",
  };

  const Folk = {
    title: "Japanese Folk Dance",
    description:
      "The Japanese Folk Dance Performance is a beautiful and culturally rich showcase of traditional Japanese dance forms. These dances have been passed down through generations and are often performed at festivals and special occasions. ",
    image: "/assets/images/IM9.webp",
  };

  const JapaneseBD = {
    title: "Boys Dance Performance",
    description:
      "The Boys Dance Performance is a high-energy and dynamic showcase where talented boys take the stage to perform choreographed dance routines. Combining modern dance styles with traditional influences, this performance will captivate the audience with its rhythm, precision, and creativity.",
    image: "/assets/images/IM5.webp",
  };

  const JapaneseGD = {
    title: "Girls Dance Performance",
    description:
      "The Girls Dance Performance is a vibrant and captivating showcase featuring talented girls performing a range of choreographed dance routines. With grace, style, and energy, this performance highlights the creativity and skill of the dancers.",
    image: "/assets/images/IM7.webp",
  };

  const Judo = {
    title: "Judo Performance",
    description:
      "Judo is a modern martial art and Olympic sport that originated in Japan. It focuses on using leverage and technique to subdue an opponent rather than relying on brute strength.",
    image: "/assets/images/IM4.webp",
  };

  const Bhartanattyam = {
    title: "Bhartanattyam Performance By Girls",
    description:
      "Bharatanatyam is one of the oldest and most revered classical dance forms of India, originating from the temples of Tamil Nadu. This graceful and expressive dance form combines intricate footwork, facial expressions, and hand gestures (mudras) to tell stories, often based on themes from Hindu mythology.",
    image: "/assets/images/IM3.webp",
  };
  const Speech = {
    title: "Speech Contest",
    description:
      "A Speech Contest is a competitive event where participants deliver speeches, typically in Japanese, on various topics such as culture, international relations, or personal experiences. The contest helps showcase public speaking skills and knowledge of Japanese language and culture.",
    image: "/assets/images/IM6.webp",
  };

  return (
    <div className="h-auto w-full flex items-center justify-center flex-col py-10 mt-24">
      <HyperText
        className="text-6xl font-bold text-black dark:text-white"
        text="EVENTS"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div onClick={() => handleClick(Yukata)}>
          <PinContainer title={Yukata.title} href={Yukata.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {Yukata.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{Yukata.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>

        <div onClick={() => handleClick(Karaoke)}>
          <PinContainer title={Karaoke.title} href={Karaoke.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {Karaoke.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{Karaoke.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>

        <div onClick={() => handleClick(Folk)}>
          <PinContainer title={Folk.title} href={Folk.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {Folk.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{Folk.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div onClick={() => handleClick(JapaneseBD)}>
          <PinContainer title={JapaneseBD.title} href={JapaneseBD.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {JapaneseBD.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{JapaneseBD.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>

        <div onClick={() => handleClick(JapaneseGD)}>
          <PinContainer title={JapaneseGD.title} href={JapaneseGD.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {JapaneseGD.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{JapaneseGD.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>

        <div onClick={() => handleClick(Judo)}>
          <PinContainer title={Judo.title} href={Judo.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {Judo.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{Judo.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>
      {/* Third row */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div onClick={() => handleClick(Bhartanattyam)}>
          <PinContainer title={Bhartanattyam.title} href={Bhartanattyam.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {Bhartanattyam.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">
                  {Bhartanattyam.description}
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>

        <div onClick={() => handleClick(Speech)}>
          <PinContainer title={Speech.title} href={Speech.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {Speech.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{Speech.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
