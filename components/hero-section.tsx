import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image src="/images/hero.jpg" alt="Newlab workspace interior" fill className="object-cover" priority />

        {/* Overlay with subtle grid pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, transparent 49.5%, rgba(0, 0, 0, 0.1) 50%, transparent 50.5%)",
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-20 left-0 right-0 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight px-4">
          VENTURE PLATFORM FOR
          <br />
          CRITICAL TECHNOLOGY
        </h1>
      </div>
    </div>
  )
}
