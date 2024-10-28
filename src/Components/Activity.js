import { Link } from "react-router-dom";
import { HyperText } from "./HyperText";
import { useTranslation } from "react-i18next";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import ShinyButton from "./ShinyButton";

export function Activity() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="flex justify-center pb-6 sm:pb-8 lg:pb-12 mt-20 sm:mt-28 md:mt-20 lg:mt-28">
        <HyperText
          className="
            text-center
            text-sm
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl 
            xl:text-5xl 
            font-bold 
            text-black
          "
          text={t("STP")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("yukataTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/IM1.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("yukataDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("yukataDesc")}
            </CardItem>

            <Link
              to="/project/Yukata"
              state={{
                titleKey: "yukataTitle",
                descriptionKey: "yukataDesc",
                image: "/assets/images/IM1.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 2 */}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("karaokeTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/IM2.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("karaokeDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("karaokeDesc")}
            </CardItem>

            <Link
              to="/project/karaoke Performance"
              state={{
                titleKey: "karaokeTitle",
                descriptionKey: "karaokeDesc",
                image: "/assets/images/IM2.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("folkTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/IM9.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("folkDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("folkDesc")}
            </CardItem>

            <Link
              to="/project/Folk Performance"
              state={{
                titleKey: "folkTitle",
                descriptionKey: "folkDesc",
                image: "/assets/images/IM9.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 4*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("boysDanceTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/IM5.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("boysDanceDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("boysDanceDesc")}
            </CardItem>

            <Link
              to="/project/Boys Dance Performance"
              state={{
                titleKey: "boysDanceTitle",
                descriptionKey: "boysDanceDesc",
                image: "/assets/images/IM5.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 5*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("girlsDanceTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/IM7.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("girlsDanceDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("girlsDanceDesc")}
            </CardItem>

            <Link
              to="/project/Girls Dance Performance"
              state={{
                titleKey: "girlsDanceTitle",
                descriptionKey: "girlsDanceDesc",
                image: "/assets/images/IM7.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 6*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("judoTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/S.jpg"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("judoDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("judoDesc")}
            </CardItem>

            <Link
              to="/project/Girls Dance Performance"
              state={{
                titleKey: "judoTitle",
                descriptionKey: "judoDesc",
                image: "/assets/images/S.jpg",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 7*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("bhartanattyamTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/IM3.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("bhartanattyamDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("bhartanattyamDesc")}
            </CardItem>

            <Link
              to="/project/Girls Dance Performance"
              state={{
                titleKey: "bhartanattyamTitle",
                descriptionKey: "bhartanattyamDesc",
                image: "/assets/images/IM3.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 8*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("speechTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/IM6.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("speechDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("speechDesc")}
            </CardItem>

            <Link
              to="/project/Girls Dance Performance"
              state={{
                titleKey: "speechTitle",
                descriptionKey: "speechDesc",
                image: "/assets/images/IM6.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 9*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("prize")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/P.jpg"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("prizeDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("prizeDesc")}
            </CardItem>

            <Link
              to="/project/Girls Dance Performance"
              state={{
                titleKey: "prize",
                descriptionKey: "prizeDesc",
                image: "/assets/images/P.jpg",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>
      </div>
      <div className="flex justify-center pb-6 sm:pb-8 lg:pb-12 mt-20 sm:mt-28 md:mt-20 lg:mt-28">
        <HyperText
          className="
            text-center
            text-sm
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl 
            xl:text-5xl 
            font-bold 
            text-black
          "
          text={t("ACT")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 9*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("knowTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/K.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("knowDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("knowDesc")}
            </CardItem>

            <Link
              to="/project/Knowledge Booth"
              state={{
                titleKey: "knowTitle",
                descriptionKey: "knowDesc",
                image: "/assets/images/K.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 9*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("chopstickTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/CP.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("chopstickDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("chopstickDesc")}
            </CardItem>

            <Link
              to="/project/Knowledge Booth"
              state={{
                titleKey: "chopstickTitle",
                descriptionKey: "chopstickDesc",
                image: "/assets/images/CP.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 9*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("calligraphyTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/CA.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("calligraphyDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("calligraphyDesc")}
            </CardItem>

            <Link
              to="/project/Knowledge Booth"
              state={{
                titleKey: "calligraphyTitle",
                descriptionKey: "calligraphyDesc",
                image: "/assets/images/CA.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>
        {/* Card 9*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("kanjiTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/AC3.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("kanjiDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("kanjiDesc")}
            </CardItem>

            <Link
              to="/project/Knowledge Booth"
              state={{
                titleKey: "kanjiTitle",
                descriptionKey: "kanjiDesc",
                image: "/assets/images/AC3.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("calligraphyTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/CA.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("calligraphyDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("calligraphyDesc")}
            </CardItem>

            <Link
              to="/project/Knowledge Booth"
              state={{
                titleKey: "calligraphyTitle",
                descriptionKey: "calligraphyDesc",
                image: "/assets/images/CA.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>
        {/* Card 9*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("origamiTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/AC2.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("origamiDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("origamiDesc")}
            </CardItem>

            <Link
              to="/project/Knowledge Booth"
              state={{
                titleKey: "origamiTitle",
                descriptionKey: "origamiDesc",
                image: "/assets/images/AC2.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 9*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("Art")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/AC1.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("ArtDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("ArtDesc")}
            </CardItem>

            <Link
              to="/project/Knowledge Booth"
              state={{
                titleKey: "Art",
                descriptionKey: "ArtDesc",
                image: "/assets/images/AC1.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Card 9*/}
        <CardContainer className="cursor-pointer inter-var mx-5 max-w-full md:max-w-[28rem] lg:max-w-[48rem]">
          <CardBody className="bg-gray-50 text-center relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="
                text-xs
                sm:text-sm
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-bold 
                text-neutral-600 
                dark:text-white
              "
            >
              {t("yukaPTitle")}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/images/IM1.webp"
                className="h-40 sm:h-56 lg:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={t("yukaPDesc")}
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 line-clamp-2 text-xs sm:text-sm max-w-xs mt-2 dark:text-neutral-300"
            >
              {t("yukaPDesc")}
            </CardItem>

            <Link
              to="/project/Knowledge Booth"
              state={{
                titleKey: "yukaPTitle",
                descriptionKey: "yukaPDesc",
                image: "/assets/images/IM1.webp",
              }}
              className="mt-4 inline-block"
            >
              <ShinyButton>{t("det")}</ShinyButton>
            </Link>
          </CardBody>
        </CardContainer>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
