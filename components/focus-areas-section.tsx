import Image from "next/image"
import Link from "next/link"

const focusAreas = [
  {
    id: 1,
    title: "Climate Tech",
    description: "Developing technologies to address climate change and promote sustainability.",
    image: "/images/climate-tech.jpg",
  },
  {
    id: 2,
    title: "Advanced Materials",
    description: "Creating next-generation materials with novel properties and applications.",
    image: "/images/advanced-materials.jpg",
  },
  {
    id: 3,
    title: "Robotics & AI",
    description: "Building intelligent systems that can perceive, learn, and interact with the world.",
    image: "/images/robotics-ai.jpg",
  },
  {
    id: 4,
    title: "Urban Tech",
    description: "Reimagining cities through technology to improve quality of life and sustainability.",
    image: "/images/urban-tech.jpg",
  },
]

export function FocusAreasSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Focus Areas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area) => (
            <div key={area.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <Link
                href={`/focus-areas#${area.title.toLowerCase().replace(" ", "-")}`}
                className="text-black font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
