import { useNavigate } from "react-router-dom";
import { PinContainer } from "./PinContainer";
import { HyperText } from "./HyperText";
import { useTranslation } from "react-i18next";
export function Activity() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (pin) => {
    navigate(`/project/${pin.title}`, { state: { ...pin } });
  };

  return (
    <div className="h-auto w-full flex items-center justify-center flex-col py-10 mt-24">
      <HyperText
        className="
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl 
          xl:text-7xl 
          font-bold 
          text-black 
          pb-8 
          sm:pb-12 
          lg:pb-16
        "
        text={t("STP")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div
          onClick={() =>
            handleClick({
              title: t("yukataTitle"),
              description: t("yukataDesc"),
              image: "/assets/images/IM1.webp",
            })
          }
        >
          <PinContainer title={t("yukataTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("yukataTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("yukataDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M11.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>

        <div
          onClick={() =>
            handleClick({
              title: t("karaokeTitle"),
              description: t("karaokeDesc"),
              image: "/assets/images/IM2.webp",
            })
          }
        >
          <PinContainer title={t("karaokeTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("karaokeTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("karaokeDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M2.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>

        <div
          onClick={() =>
            handleClick({
              title: t("folkTitle"),
              description: t("folkDesc"),
              image: "/assets/images/IM9.webp",
            })
          }
        >
          <PinContainer title={t("folkTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("folkTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("folkTitle")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M3.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
      </div>
      {/* Second row */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div
          onClick={() =>
            handleClick({
              title: t("boysDanceTitle"),
              description: t("boysDanceDesc"),
              image: "/assets/images/IM5.webp",
            })
          }
        >
          <PinContainer title={t("boysDanceTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("boysDanceTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("boysDanceDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M4.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
        <div
          onClick={() =>
            handleClick({
              title: t("girlsDanceTitle"),
              description: t("girlsDanceDesc"),
              image: "/assets/images/IM7.webp",
            })
          }
        >
          <PinContainer title={t("girlsDanceTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("girlsDanceTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("girlsDanceDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M5.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
        <div
          onClick={() =>
            handleClick({
              title: t("judoTitle"),
              description: t("judoDesc"),
              image: "/assets/images/S.jpg",
            })
          }
        >
          <PinContainer title={t("judoTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("judoTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("judoDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M6.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
      </div>
      {/* Third row */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div
          onClick={() =>
            handleClick({
              title: t("bhartanattyamTitle"),
              description: t("bhartanattyamDesc"),
              image: "/assets/images/IM3.webp",
            })
          }
        >
          <PinContainer title={t("bhartanattyamTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("bhartanattyamTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("bhartanattyamDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M7.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
        <div
          onClick={() =>
            handleClick({
              title: t("speechTitle"),
              description: t("speechDesc"),
              image: "/assets/images/IM6.webp",
            })
          }
        >
          <PinContainer title={t("speechTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("speechTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("speechDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M8.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>

        <div
          onClick={() =>
            handleClick({
              title: t("prize"),
              description: t("prizeDesc"),
              image: "/assets/images/P.webp",
            })
          }
        >
          <PinContainer title={t("prize")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("prize")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("prizeDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M9.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
      </div>
      {/* ---------------------------------  New Activities ------------------------------------------ */}
      <HyperText
        className="
        text-3xl 
        sm:text-4xl 
        md:text-5xl 
        lg:text-6xl 
        xl:text-7xl 
        font-bold 
        text-black 

        pb-8 
        sm:pb-12 
        lg:pb-16
      "
        text={t("ACT")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div
          onClick={() =>
            handleClick({
              title: t("knowTitle"),
              description: t("knowDesc"),
              image: "/assets/images/K.webp",
            })
          }
        >
          <PinContainer title={t("knowTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("knowTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("knowDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M10.jpeg')",
                }}
              />
            </div>
          </PinContainer>
        </div>

        <div
          onClick={() =>
            handleClick({
              title: t("chopstickTitle"),
              description: t("chopstickDesc"),
              image: "/assets/images/CP.webp",
            })
          }
        >
          <PinContainer title={t("chopstickTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("chopstickTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("chopstickDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M13.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>

        <div
          onClick={() =>
            handleClick({
              title: t("calligraphyTitle"),
              description: t("calligraphyDesc"),
              image: "/assets/images/CA.webp",
            })
          }
        >
          <PinContainer title={t("calligraphyTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("calligraphyTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("calligraphyDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M14.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
      </div>
      {/* Second row */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div
          onClick={() =>
            handleClick({
              title: t("origamiTitle"),
              description: t("origamiDesc"),
              image: "/assets/images/AC3.webp",
            })
          }
        >
          <PinContainer title={t("origamiTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("origamiTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("origamiDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M15.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>

        <div
          onClick={() =>
            handleClick({
              title: t("Art"),
              description: t("ArtDesc"),
              image: "/assets/images/AC2.webp",
            })
          }
        >
          <PinContainer title={t("Art")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("Art")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("ArtDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M16.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>

        <div
          onClick={() =>
            handleClick({
              title: t("kanjiTitle"),
              description: t("kanjiDesc"),
              image: "/assets/images/AC1.webp",
            })
          }
        >
          <PinContainer title={t("kanjiTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("kanjiTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("kanjiDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M17.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
      </div>
      {/* Third row */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div
          onClick={() =>
            handleClick({
              title: t("yukaPTitle"),
              description: t("yukaPDesc"),
              image: "/assets/images/IM1.webp",
            })
          }
        >
          <PinContainer title={t("yukaPTitle")}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {t("yukaPTitle")}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal line-clamp-2">
                <span className="text-slate-500">{t("yukaPDesc")}</span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/M1.jpg')",
                }}
              />
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
