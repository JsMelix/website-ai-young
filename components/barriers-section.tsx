import Link from "next/link"
import Image from "next/image"

export function BarriersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black">
          {/* Left column - Main text */}
          <div className="p-8 md:border-r border-black">
            <h2 className="text-3xl md:text-4xl font-['Dutch_801',_'Times_New_Roman',_serif] mb-6">
              We lower the barriers for startups to commercialize critical technologies aimed at the world's industrial-scale challenges.
            </h2>
            
            <div className="mt-12 space-y-4">
              <Link 
                href="/apply" 
                className="block w-full py-3 px-6 bg-gradient-to-r from-blue-400 to-purple-900 text-white text-center font-medium font-sans"
              >
                Apply
              </Link>
              
              <Link 
                href="/partners" 
                className="block w-full py-3 px-6 bg-gradient-to-r from-yellow-300 to-yellow-500 text-black text-center font-medium font-sans"
              >
                Partner with Us
              </Link>
            </div>
          </div>
          
          {/* Middle column - Infrastructure */}
          <div className="p-8 md:border-r border-black">
            <div className="mb-12">
              <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2 font-sans">INFRASTRUCTURE</h3>
              <p className="text-xl font-['Dutch_801',_'Times_New_Roman',_serif]">
                World-class facilities, prototyping labs, piloting sites, and regulatory partnerships.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2 font-sans">PROJECTS</h3>
              <p className="text-xl font-['Dutch_801',_'Times_New_Roman',_serif]">
                Funded commercialization engagements between startups and leaders in industry & government.
              </p>
            </div>
          </div>
          
          {/* Right column - Images */}
          <div className="p-8 flex flex-col space-y-6 items-center justify-center">
            <div className="relative h-40 w-40 rounded-full overflow-hidden">
              <Image 
                src="/images/blue-circle.jpg" 
                alt="Blue circular pattern" 
                fill 
                className="object-cover"
              />
            </div>
            
            <div className="relative h-40 w-40 rounded-full overflow-hidden">
              <Image 
                src="/images/gold-circle.jpg" 
                alt="Gold circular pattern" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}