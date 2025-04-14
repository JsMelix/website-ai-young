import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const resources = [
  {
    id: 1,
    title: "The Future of Climate Tech",
    excerpt: "Exploring the most promising technologies addressing climate change.",
    image: "/images/resource-1.jpg",
    date: "April 10, 2023",
    type: "Article",
  },
  {
    id: 2,
    title: "Robotics Revolution: Manufacturing in 2030",
    excerpt: "How automation and AI are transforming industrial production.",
    image: "/images/resource-2.jpg",
    date: "March 22, 2023",
    type: "Report",
  },
  {
    id: 3,
    title: "Advanced Materials Symposium",
    excerpt: "Join leading researchers and entrepreneurs for a day of insights and networking.",
    image: "/images/resource-3.jpg",
    date: "May 15, 2023",
    type: "Event",
  },
  {
    id: 4,
    title: "Urban Tech: Building Smarter Cities",
    excerpt: "Case studies of technology implementations improving urban environments.",
    image: "/images/resource-4.jpg",
    date: "February 8, 2023",
    type: "Whitepaper",
  },
  {
    id: 5,
    title: "Startup Funding Strategies",
    excerpt: "Expert advice on raising capital for deep tech ventures.",
    image: "/images/resource-5.jpg",
    date: "January 30, 2023",
    type: "Guide",
  },
  {
    id: 6,
    title: "Innovation Ecosystems: Global Perspectives",
    excerpt: "Comparing innovation hubs and their approaches to fostering technology development.",
    image: "/images/resource-6.jpg",
    date: "December 12, 2022",
    type: "Report",
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl max-w-3xl">
            Explore our collection of articles, reports, events, and other resources related to critical technology and
            innovation.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">All Resources</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              Articles
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              Reports
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              Events
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              Guides
            </button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link href={`/resources/${resource.id}`} key={resource.id} className="group">
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48 w-full">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{resource.date}</span>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-xs rounded-full">{resource.type}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700">{resource.title}</h3>
                    <p className="text-gray-600">{resource.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to receive the latest insights, event announcements, and resources.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
