import { BorderBeam } from "./BorderBeam";
import { useLocation, useNavigate } from "react-router-dom";

export function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate for routing
  const { title, description, href, image } = location.state || {};

  // Function to handle back click
  const handleBackClick = () => {
    navigate("/activity"); // Navigate back to the activities page
  };

  return (
    <div className="container mx-auto p-10 mt-10">
      {/* Wrapping the entire card content inside the BorderBeam */}
      <div className="relative flex items-center justify-center w-full mb-10">
        {/* Ensure the card container is relative and overflow is hidden */}
        <div className="relative bg-white  rounded-lg p-6 shadow-lg border w-full max-w-5xl mx-auto text-center overflow-hidden">
          {/* BorderBeam effect */}
          <BorderBeam size={500} duration={10} delay={6} />

          {/* Back arrow at top-left */}
          <span
            onClick={handleBackClick}
            className="absolute top-4 left-4 text-3xl cursor-pointer"
          >
            ←
          </span>

          {/* Title inside the card */}
          <h1 className="text-2xl font-bold mb-4">{title}</h1>

          {/* Increased width and height for the image */}
          <img
            src={image}
            alt={title}
            className="rounded-lg border w-full max-w-3xl h-[32rem] object-cover mb-4 mx-auto"
          />

          {/* Description inside the card */}
          <p className="mb-4 font-semibold text-neutral-700 ">{description}</p>
        </div>
      </div>
    </div>
  );
}
