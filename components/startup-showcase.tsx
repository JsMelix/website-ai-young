import Image from "next/image"

const startups = [
  {
    id: 1,
    name: "EcoTech Solutions",
    description: "Developing sustainable energy storage solutions for renewable power systems.",
    logo: "/images/startup-1.jpg",
  },
  {
    id: 2,
    name: "RoboHealth",
    description: "Creating robotic assistants for healthcare and elderly care applications.",
    logo: "/images/startup-2.jpg",
  },
  {
    id: 3,
    name: "MaterialX",
    description: "Pioneering advanced materials for aerospace and automotive industries.",
    logo: "/images/startup-3.jpg",
  },
  {
    id: 4,
    name: "UrbanSense",
    description: "Building smart city infrastructure to improve urban mobility and safety.",
    logo: "/images/startup-4.jpg",
  },
  {
    id: 5,
    name: "AquaInnovate",
    description: "Developing water purification technologies for global access to clean water.",
    logo: "/images/startup-5.jpg",
  },
  {
    id: 6,
    name: "NanoMed",
    description: "Creating nanotechnology solutions for targeted drug delivery systems.",
    logo: "/images/startup-6.jpg",
  },
]

export function StartupShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Startups</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Meet some of the innovative companies building the future at Newlab.
            </p>
          </div>
          <a href="/startups" className="mt-4 md:mt-0 text-black font-medium hover:underline">
            View all startups →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <div key={startup.id} className="border border-gray-100 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="relative h-16 w-16 mb-4">
                <Image src={startup.logo || "/placeholder.svg"} alt={startup.name} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2">{startup.name}</h3>
              <p className="text-gray-600">{startup.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
