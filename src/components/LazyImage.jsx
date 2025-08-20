import { useState } from "react";

export default function LazyImage({ src, alt, className }) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${loading ? "bg-white/5" : ""}`}
    >
      {/* Spinner (shown while image is loading) */}
      {loading && (
        <div className="absolute flex items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy" // native lazy loading
        onLoad={() => setLoading(false)}
        className={`${className} transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
