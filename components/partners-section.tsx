import Image from "next/image"

const partners = [
  { id: 1, name: "Partner 1", logo: "/images/partner-1.jpg" },
  { id: 2, name: "Partner 2", logo: "/images/partner-2.jpg" },
  { id: 3, name: "Partner 3", logo: "/images/partner-3.jpg" },
  { id: 4, name: "Partner 4", logo: "/images/partner-4.jpg" },
  { id: 5, name: "Partner 5", logo: "/images/partner-5.jpg" },
  { id: 6, name: "Partner 6", logo: "/images/partner-6.jpg" },
  { id: 7, name: "Partner 7", logo: "/images/partner-7.jpg" },
  { id: 8, name: "Partner 8", logo: "/images/partner-8.jpg" },
]

export function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4 bg-white rounded-lg h-24">
              <div className="relative h-12 w-full">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
