import Link from "next/link"

export function JoinSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Become part of a network of innovators working on critical technologies that shape our future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/apply"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
