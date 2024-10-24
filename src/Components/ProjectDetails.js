import { useLocation } from "react-router-dom";

export function ProjectDetails() {
  const location = useLocation();
  const { title, description, href, image } = location.state || {};

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-5">{title}</h1>
      <img src={image} alt={title} className="mb-5 w-full h-auto" />
      <p className="mb-5">{description}</p>
      <a
        href={href}
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </div>
  );
}
