import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function ApplyPage() {
  return (
    <main className="min-h-screen">
      <NavBar />

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Apply to Newlab</h1>
          <p className="text-xl max-w-3xl">
            Join our community of innovators working on critical technologies that shape our future.
          </p>
        </div>
      </div>

      {/* Application Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border border-gray-200 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Startup Membership</h2>
              <p className="text-gray-600 mb-6">
                For early to growth-stage companies developing hardware or frontier technology solutions.
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-8">
                <li>Access to Newlab's facilities and prototyping resources</li>
                <li>Connections to industry partners and investors</li>
                <li>Expert support for product development and scaling</li>
                <li>Community of fellow entrepreneurs and innovators</li>
              </ul>
              <button className="w-full py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Apply as a Startup
              </button>
            </div>

            <div className="p-8 border border-gray-200 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Individual Membership</h2>
              <p className="text-gray-600 mb-6">
                For engineers, designers, and innovators working on frontier technology projects.
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-8">
                <li>Workspace in our collaborative environment</li>
                <li>Access to prototyping facilities and equipment</li>
                <li>Community events and knowledge sharing</li>
                <li>Networking with industry experts and entrepreneurs</li>
              </ul>
              <button className="w-full py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Apply as an Individual
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Submit Application</h3>
              <p className="text-gray-600">
                Complete our online application form with details about your company or project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Review</h3>
              <p className="text-gray-600">Our team reviews applications to assess fit with Newlab's focus areas.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Interview</h3>
              <p className="text-gray-600">
                Selected applicants are invited for an interview with our membership team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Decision</h3>
              <p className="text-gray-600">
                Final decisions are made and successful applicants are welcomed to Newlab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">What types of companies does Newlab accept?</h3>
              <p className="text-gray-600">
                Newlab focuses on companies developing hardware and frontier technologies in areas such as climate tech,
                robotics, AI, advanced materials, and urban tech. We look for innovative solutions that address
                significant challenges.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What stage should my company be at to apply?</h3>
              <p className="text-gray-600">
                We accept companies at various stages, from early prototyping to growth stage. The key factor is having
                a clear vision and demonstrated progress in developing your technology.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What resources does Newlab provide?</h3>
              <p className="text-gray-600">
                Newlab provides workspace, prototyping facilities, expert support, connections to industry partners and
                investors, and a community of fellow innovators. Specific resources vary by membership type.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">How long does the application process take?</h3>
              <p className="text-gray-600">
                The application process typically takes 4-6 weeks from submission to final decision. We review
                applications on a rolling basis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Does Newlab take equity in member companies?</h3>
              <p className="text-gray-600">
                Standard membership does not involve equity. However, some of our specialized programs and venture
                initiatives may include investment components.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
