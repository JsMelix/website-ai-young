import Link from "next/link"

export function YoungAINavbar() {
  return (
    <nav className="py-4 px-4 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold uppercase">Young AI Leaders</h1>
          <h2 className="text-xl font-bold uppercase ml-2">Bogotá</h2>
        </div>
        
        <div className="hidden md:flex space-x-6 text-xs uppercase">
          <Link href="#sobre" className="hover:underline">1. Sobre Nosotros</Link>
          <Link href="#areas" className="hover:underline">2. Áreas de Enfoque</Link>
          <Link href="#miembros" className="hover:underline">3. Miembros</Link>
          <Link href="#aliados" className="hover:underline">4. Aliados</Link>
          <Link href="#contacto" className="hover:underline">5. Contacto</Link>
        </div>
      </div>
      <div className="w-full h-px bg-black mt-2"></div>
    </nav>
  )
}