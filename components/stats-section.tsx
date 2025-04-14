import Image from "next/image"
import Link from "next/link"

export function StatsSection() {
  return (
    <section className="py-16 bg-white border-t border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase">
            A global community of critical<br />technology startups
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - Stats */}
            <div className="space-y-12">
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-['Dutch_801',_'Times_New_Roman',_serif] mr-2">1,000+</span>
                <span className="text-xs text-blue-800 uppercase">members</span>
              </div>
              
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-['Dutch_801',_'Times_New_Roman',_serif] mr-2">500k ft<sup>2</sup></span>
                <span className="text-xs text-blue-800 uppercase">of innovation space</span>
              </div>
              
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-['Dutch_801',_'Times_New_Roman',_serif] mr-2">300+</span>
                <span className="text-xs text-blue-800 uppercase">startups</span>
              </div>
              
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-['Dutch_801',_'Times_New_Roman',_serif] mr-2">$2.3b+</span>
                <span className="text-xs text-blue-800 uppercase">in exits</span>
              </div>
              
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-['Dutch_801',_'Times_New_Roman',_serif] mr-2">100+</span>
                <span className="text-xs text-blue-800 uppercase">pilots launched to test emergent climate solutions</span>
              </div>
              
              <div className="flex items-baseline">
                <span className="text-4xl md:text-5xl font-['Dutch_801',_'Times_New_Roman',_serif] mr-2">60+</span>
                <span className="text-xs text-blue-800 uppercase">industry & government partners</span>
              </div>
            </div>
            
            {/* Right column - Images and link */}
            <div className="flex flex-col justify-between">
              <div className="flex justify-center space-x-8">
                <div className="relative h-32 w-32 rounded-full overflow-hidden">
                  <Image 
                    src="/images/blue-pattern.jpg" 
                    alt="Blue pattern" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 w-32 rounded-full overflow-hidden mt-16">
                  <Image 
                    src="/images/pink-pattern.jpg" 
                    alt="Pink pattern" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="mt-16 text-sm">
                <p className="text-xs mb-2">
                  * A comprehensive report based findings from Newlab's community of 1,000+ members, 300+ startups, and 60+ partners.
                </p>
                <p className="text-xs mb-2">
                  * Newlab's net economic impact represents the sum of direct, indirect, and induced economic activity.
                </p>
                <p className="text-xs mb-2">
                  * Newlab's community includes startups, corporate partners, investors, and academic institutions.
                </p>
                <p className="text-xs mb-2">
                  * Newlab's economic impact is calculated based on job creation, investment, and revenue generation.
                </p>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/about/membership" 
                  className="text-sm text-blue-800 hover:underline"
                >
                  Learn about Startup Membership at Newlab →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient bar at bottom */}
      <div className="h-4 w-full bg-gradient-to-r from-red-500 to-orange-500 mt-16"></div>
    </section>
  )
}