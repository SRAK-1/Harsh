import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
];

// Duplicate images to create seamless loop
const duplicatedImages = [...images, ...images];

export default function ImageStrip() {
  return (
    <section className="relative w-full py-12 bg-ivory overflow-hidden border-b border-gold-muted/10">
      {/* Fade Masks */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="flex w-max animate-scroll-strip hover:[animation-play-state:paused]">
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="relative h-40 md:h-64 w-60 md:w-96 mx-2 md:mx-4 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm transition-all duration-700 hover:scale-[1.03] hover:brightness-105 hover:shadow-xl cursor-pointer"
          >
            <Image
              src={src}
              alt={`Portfolio image ${index}`}
              fill
              sizes="(max-width: 768px) 240px, 384px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
