import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Top section with Earth image and buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="relative h-32 w-32 mb-8 md:mb-0">
            <Image 
              src="/images/earth.jpg" 
              alt="Earth" 
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Link 
              href="/apply" 
              className="px-6 py-2 border border-black text-black text-center hover:bg-black hover:text-white transition-colors"
            >
              Join Newlab
            </Link>
            <Link 
              href="/partners" 
              className="px-6 py-2 border border-black text-black text-center hover:bg-black hover:text-white transition-colors"
            >
              Work with us
            </Link>
          </div>
        </div>
        
        {/* Newlab logo */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-8xl font-bold">Newlab</h2>
        </div>
        
        {/* Bottom section with copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-start border-t border-gray-200 pt-6">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-600">©2023 New Lab, LLC. All rights reserved.</p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <Link href="https://instagram.com/newlab" className="text-gray-600 hover:text-black">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="https://linkedin.com/company/newlab" className="text-gray-600 hover:text-black">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link href="https://twitter.com/newlab" className="text-gray-600 hover:text-black">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <Link href="/about" className="text-gray-600 hover:text-black">About Us</Link>
            <Link href="/startups" className="text-gray-600 hover:text-black">Startups</Link>
            <Link href="/careers" className="text-gray-600 hover:text-black">Careers</Link>
            <Link href="/partners" className="text-gray-600 hover:text-black">Partners</Link>
            <Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
            <Link href="/resources" className="text-gray-600 hover:text-black">Founder Resources</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
