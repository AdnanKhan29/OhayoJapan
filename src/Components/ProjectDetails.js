import { BorderBeam } from "./BorderBeam";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { titleKey, descriptionKey, image } = location.state || {};

  const handleBackClick = () => {
    navigate("/activity");
  };

  return (
    <div className="container mx-auto p-10 mt-10">
      <div className="relative flex items-center justify-center w-full mb-10">
        <div className="relative bg-white rounded-lg p-6 shadow-lg border w-full max-w-5xl mx-auto text-center overflow-hidden">
          <BorderBeam size={500} duration={10} delay={6} />

          <span
            onClick={handleBackClick}
            className="absolute top-4 left-4 text-3xl cursor-pointer"
          >
            ←
          </span>

          {/* Dynamically translated title */}
          <h1 className="text-2xl font-bold mb-4">{t(titleKey)}</h1>

          <img
            src={image}
            alt={t(titleKey)}
            className="rounded-lg border w-full max-w-3xl h-[32rem] object-cover mb-4 mx-auto"
          />

          {/* Dynamically translated description */}
          <p className="mb-4 font-semibold text-neutral-700 ">
            {t(descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
}
