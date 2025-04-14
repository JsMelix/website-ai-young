import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"

const focusAreas = [
  {
    id: "climate-tech",
    title: "Climate Tech",
    description: "Developing technologies to address climate change and promote sustainability.",
    longDescription:
      "Our Climate Tech focus area supports startups developing innovative solutions to combat climate change. From renewable energy and carbon capture to sustainable agriculture and circular economy initiatives, we're helping entrepreneurs scale technologies that can have a meaningful impact on our planet's future.",
    image: "/images/climate-tech.jpg",
  },
  {
    id: "advanced-materials",
    title: "Advanced Materials",
    description: "Creating next-generation materials with novel properties and applications.",
    longDescription:
      "The Advanced Materials focus area explores cutting-edge materials science innovations. Our community is developing new materials with extraordinary properties - from self-healing polymers and biodegradable plastics to advanced composites and nanomaterials - that are transforming industries from construction to healthcare.",
    image: "/images/advanced-materials.jpg",
  },
  {
    id: "robotics-ai",
    title: "Robotics & AI",
    description: "Building intelligent systems that can perceive, learn, and interact with the world.",
    longDescription:
      "Our Robotics & AI focus area supports the development of autonomous systems and artificial intelligence applications. From industrial automation and collaborative robots to computer vision and machine learning algorithms, we're advancing technologies that can augment human capabilities and solve complex problems across industries.",
    image: "/images/robotics-ai.jpg",
  },
  {
    id: "urban-tech",
    title: "Urban Tech",
    description: "Reimagining cities through technology to improve quality of life and sustainability.",
    longDescription:
      "The Urban Tech focus area is dedicated to technologies that make cities more livable, efficient, and sustainable. Our startups are working on everything from smart infrastructure and mobility solutions to waste management systems and urban agriculture, helping to create the resilient cities of tomorrow.",
    image: "/images/urban-tech.jpg",
  },
]

export default function FocusAreasPage() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Focus Areas</h1>
          <p className="text-xl max-w-3xl">
            Newlab concentrates on critical technologies that have the potential to transform our world. Our focus areas
            represent the fields where we believe innovation can have the greatest impact.
          </p>
        </div>
      </div>

      {/* Focus Areas Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {focusAreas.map((area, index) => (
            <div
              key={area.id}
              id={area.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${index !== focusAreas.length - 1 ? "mb-24" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-3xl font-bold mb-6">{area.title}</h2>
                <p className="text-lg mb-6">{area.description}</p>
                <p className="text-lg">{area.longDescription}</p>
              </div>
              <div
                className={`relative h-80 md:h-96 rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
