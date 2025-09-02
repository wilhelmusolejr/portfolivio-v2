import { useState } from "react";

export default function ProjectScreenshotItem({
  src,
  index,
  setCurrentImage,
  image,
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative h-48 w-full min-w-12/12 rounded-lg bg-gray-900 md:min-w-6/12">
      {/* spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/5">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        </div>
      )}

      {/* actual image */}
      <img
        src={src}
        alt={`Screenshot ${index + 1}`}
        onLoad={() => setLoading(false)}
        loading="lazy" // native lazy loading
        className="h-full w-full cursor-pointer rounded-lg object-cover lg:w-full lg:flex-shrink"
        onClick={() => setCurrentImage(`${image}`)}
      />
    </div>
  );
}
