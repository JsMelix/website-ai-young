import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Newlab</h1>
          <p className="text-xl max-w-3xl">
            We're a community of experts and innovators applying transformative technology to solve the world's biggest
            challenges.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                Newlab exists to help entrepreneurs apply transformative technologies to things that matter.
              </p>
              <p className="text-lg mb-4">
                We believe that rapid technological advancement can help us address the most pressing issues of our
                time, from climate change to healthcare access to urban infrastructure.
              </p>
              <p className="text-lg">
                By bringing together entrepreneurs, engineers, inventors and industry leaders, we help create a
                collaborative ecosystem where innovation thrives.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image src="/images/about-mission.jpg" alt="Newlab mission" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image src="/images/about-history.jpg" alt="Newlab building history" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="text-lg mb-4">
                Our flagship location in the Brooklyn Navy Yard dates back to 1902 and served as the primary machine
                shop for every major ship launched during World Wars I and II.
              </p>
              <p className="text-lg mb-4">
                In 2016, we transformed this historic building into an 84,000 square-foot innovation hub, preserving its
                industrial character while creating a modern space for collaboration and technological development.
              </p>
              <p className="text-lg">
                Today, Newlab has expanded beyond Brooklyn with additional locations and a growing global community of
                innovators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={`/images/team-${i}.jpg`} alt={`Team member ${i}`} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p className="text-gray-600">Chief Executive Officer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
