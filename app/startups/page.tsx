import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"

const startups = [
  {
    id: 1,
    name: "EcoTech Solutions",
    description: "Developing sustainable energy storage solutions for renewable power systems.",
    longDescription:
      "EcoTech Solutions is pioneering advanced battery technology that significantly increases energy density while reducing costs. Their innovations enable more efficient storage of renewable energy, helping to accelerate the transition away from fossil fuels.",
    logo: "/images/startup-1.jpg",
    category: "Climate Tech",
  },
  {
    id: 2,
    name: "RoboHealth",
    description: "Creating robotic assistants for healthcare and elderly care applications.",
    longDescription:
      "RoboHealth develops assistive robots that help healthcare providers deliver better care and support aging populations. Their technology combines advanced robotics with AI to create companions that can monitor health metrics, assist with daily tasks, and provide social interaction.",
    logo: "/images/startup-2.jpg",
    category: "Robotics & AI",
  },
  {
    id: 3,
    name: "MaterialX",
    description: "Pioneering advanced materials for aerospace and automotive industries.",
    longDescription:
      "MaterialX is developing next-generation composite materials that are stronger, lighter, and more sustainable than traditional options. Their innovations are helping aerospace and automotive manufacturers reduce weight, improve fuel efficiency, and decrease environmental impact.",
    logo: "/images/startup-3.jpg",
    category: "Advanced Materials",
  },
  {
    id: 4,
    name: "UrbanSense",
    description: "Building smart city infrastructure to improve urban mobility and safety.",
    longDescription:
      "UrbanSense creates networked sensor systems that help cities understand traffic patterns, air quality, noise levels, and more. Their platform enables municipal leaders to make data-driven decisions that improve quality of life and resource allocation.",
    logo: "/images/startup-4.jpg",
    category: "Urban Tech",
  },
  {
    id: 5,
    name: "AquaInnovate",
    description: "Developing water purification technologies for global access to clean water.",
    longDescription:
      "AquaInnovate has created a revolutionary water filtration system that removes contaminants at a fraction of the cost of traditional methods. Their technology is being deployed in water-stressed regions around the world, providing clean drinking water to communities in need.",
    logo: "/images/startup-5.jpg",
    category: "Climate Tech",
  },
  {
    id: 6,
    name: "NanoMed",
    description: "Creating nanotechnology solutions for targeted drug delivery systems.",
    longDescription:
      "NanoMed is revolutionizing medicine with nanoparticle technology that can deliver therapeutic compounds directly to diseased cells. Their platform improves treatment efficacy while reducing side effects, with applications across oncology, neurology, and infectious disease.",
    logo: "/images/startup-6.jpg",
    category: "Advanced Materials",
  },
  {
    id: 7,
    name: "GreenBuild",
    description: "Developing sustainable construction materials and building systems.",
    longDescription:
      "GreenBuild creates eco-friendly building materials that sequester carbon and reduce environmental impact. Their innovative approach to construction helps developers meet sustainability goals while creating healthier indoor environments.",
    logo: "/images/startup-7.jpg",
    category: "Climate Tech",
  },
  {
    id: 8,
    name: "AutoNav",
    description: "Building autonomous navigation systems for various transportation modes.",
    longDescription:
      "AutoNav develops advanced navigation and perception systems for autonomous vehicles. Their technology enables safer, more efficient transportation across cars, trucks, drones, and marine vessels.",
    logo: "/images/startup-8.jpg",
    category: "Robotics & AI",
  },
  {
    id: 9,
    name: "SmartFarm",
    description: "Creating AI-powered systems for precision agriculture and food production.",
    longDescription:
      "SmartFarm uses artificial intelligence and robotics to optimize agricultural production. Their systems can monitor crop health, predict yields, and automate harvesting, helping farmers increase productivity while reducing resource use.",
    logo: "/images/startup-9.jpg",
    category: "Robotics & AI",
  },
]

export default function StartupsPage() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Startups</h1>
          <p className="text-xl max-w-3xl">
            Meet the innovative companies building the future at Newlab. Our community of entrepreneurs is developing
            technologies that address critical challenges across multiple industries.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">All Startups</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              Climate Tech
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              Advanced Materials
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              Robotics & AI
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              Urban Tech
            </button>
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startups.map((startup) => (
              <div
                key={startup.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="relative h-16 w-16 mr-4">
                      <Image
                        src={startup.logo || "/placeholder.svg"}
                        alt={startup.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{startup.name}</h3>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full mt-1">
                        {startup.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{startup.description}</p>
                  <p className="text-sm text-gray-500">{startup.longDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
