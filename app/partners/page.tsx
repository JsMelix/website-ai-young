import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"

const partners = [
  { id: 1, name: "Partner 1", logo: "/images/partner-1.jpg", type: "Corporate" },
  { id: 2, name: "Partner 2", logo: "/images/partner-2.jpg", type: "Corporate" },
  { id: 3, name: "Partner 3", logo: "/images/partner-3.jpg", type: "Corporate" },
  { id: 4, name: "Partner 4", logo: "/images/partner-4.jpg", type: "Corporate" },
  { id: 5, name: "Partner 5", logo: "/images/partner-5.jpg", type: "Government" },
  { id: 6, name: "Partner 6", logo: "/images/partner-6.jpg", type: "Government" },
  { id: 7, name: "Partner 7", logo: "/images/partner-7.jpg", type: "Academic" },
  { id: 8, name: "Partner 8", logo: "/images/partner-8.jpg", type: "Academic" },
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl max-w-3xl">
            Newlab collaborates with leading corporations, government agencies, and academic institutions to drive
            innovation and create impact.
          </p>
        </div>
      </div>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Corporate Partners</h3>
              <p className="text-gray-600 mb-4">
                We work with forward-thinking companies to solve complex challenges, identify emerging technologies, and
                drive innovation.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Innovation strategy development</li>
                <li>Technology scouting and validation</li>
                <li>Startup collaboration opportunities</li>
                <li>Pilot program development</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Government Partners</h3>
              <p className="text-gray-600 mb-4">
                We collaborate with government agencies to address public challenges and support the growth of critical
                technology ecosystems.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Public-private innovation initiatives</li>
                <li>Economic development programs</li>
                <li>Technology commercialization</li>
                <li>Workforce development</li>
              </ul>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Academic Partners</h3>
              <p className="text-gray-600 mb-4">
                We partner with universities and research institutions to bridge the gap between academic research and
                commercial application.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Technology transfer programs</li>
                <li>Research collaborations</li>
                <li>Student engagement opportunities</li>
                <li>Entrepreneurship education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partner Network</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center p-6 bg-white rounded-lg h-32">
                <div className="relative h-16 w-full">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join our network of partners and collaborate with innovative startups working on critical technologies.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
