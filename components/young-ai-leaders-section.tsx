import Link from "next/link"
import Image from "next/image"

export function YoungAILeadersSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-black">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-mono">
              <span className="font-bold">YOUNG AI LEADERS</span>
              <span className="ml-2">BOGOTÁ</span>
            </div>
            <div className="hidden md:flex space-x-8 text-xs">
              <Link href="#" className="hover:underline">1. SOBRE NOSOTROS</Link>
              <Link href="#" className="hover:underline">2. ÁREAS DE ENFOQUE</Link>
              <Link href="#" className="hover:underline">3. MIEMBROS</Link>
              <Link href="#" className="hover:underline">4. ALIADOS</Link>
              <Link href="#" className="hover:underline">5. CONTACTO</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-16">
          {/* Left Section */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold">UN HUB PARA LA</h2>
          </div>

          {/* Middle Section */}
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="text-center">
              <div className="space-y-2 font-bold text-xl">
                <div className="relative">
                  <span className="relative z-10">DISRUPCIÓN</span>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></div>
                </div>
                <div className="relative">
                  <span className="relative z-10">INNOVACIÓN</span>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></div>
                </div>
                <div className="relative">
                  <span className="relative z-10">HUMANIDAD</span>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">NUEVA GENERACIÓN</h2>
            </div>
            
            <div className="flex justify-end mt-8">
              <Image 
                src="/images/young-ai-logo.png"
                alt="Young AI Leaders Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Second Section - Content from the new image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 my-12 relative">
          {/* Horizontal line at the top */}
          <div className="absolute" style={{
            top: '0',
            left: '0',
            width: '50%',
            height: '1px',
            background: 'black',
            zIndex: '1'
          }}></div>
          
          {/* Vertical line to Alianzas */}
          <div className="absolute" style={{
            top: '0',
            left: '50%',
            width: '1px',
            height: '60%',
            background: 'black',
            zIndex: '1'
          }}></div>
          
          {/* Left Column - Text and Buttons */}
          <div className="p-8 flex flex-col justify-center relative">
            <div className="text-center mb-10">
              <p className="text-xl md:text-2xl font-serif max-w-md mx-auto leading-relaxed mt-0">
                Jóvenes transformando<br />
                ideas en soluciones<br />
                impactantes con IA para<br />
                los desafíos más urgentes<br />
                del mundo.
              </p>
            </div>
            
            <div className="space-y-5 max-w-xs mx-auto">
              <Link 
                href="/aplica"
                className="block py-3 px-8 rounded-full bg-[url('/images/green-texture.jpg')] bg-cover text-white text-center font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Aplica
              </Link>
              <Link 
                href="/aliado"
                className="block py-3 px-8 rounded-full bg-[url('/images/blue-texture.jpg')] bg-cover text-white text-center font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Quiero ser Aliado
              </Link>
            </div>
          </div>
          
          {/* Right Column - Numbered Points */}
          <div className="pl-10 py-10 relative">
            {/* Vertical line on the right side from Talento to Alianzas */}
            <div className="absolute top-0 right-0 w-0.5 h-[580px] bg-black"></div>
            
            <div className="space-y-10 max-w-lg">
              <div>
                <h3 className="font-bold text-lg mb-3">1. TALENTO</h3>
                <p className="text-black text-lg font-serif leading-relaxed m-0">
                  Formamos integralmente a los<br />
                  miembros del hub creando<br />
                  equipos de trabajo de impacto<br />
                  para desarrollo de proyectos.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">2. AI FOR GOOD</h3>
                <p className="text-black text-lg font-serif leading-relaxed m-0">
                  Desarrollamos soluciones<br />
                  innovadoras con IA que<br />
                  aborden desafíos del mundo<br />
                  real.
                </p>
              </div>
              
              <div className="relative">
                <h3 className="font-bold text-lg mb-3">4. ALIANZAS</h3>
                <p className="text-black text-lg font-serif leading-relaxed m-0">
                  Formamos alianzas con<br />
                  compañías de tecnología,<br />
                  gobiernos y cooperamos con<br />
                  cerca de 100 hubs alrededor del<br />
                  mundo
                </p>
              </div>
              
              {/* 3 Palancas Section */}
              <div className="mt-16 relative">
                {/* Vertical line on the left */}
                <div className="absolute top-0 left-0 w-0.5 h-full bg-black"></div>
                
                <h3 className="text-center text-xl font-bold mb-8">3 Palancas</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden w-24 h-24 mb-2">
                      <Image 
                        src="/images/tecnologia.png"
                        alt="Tecnología"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-sm font-medium">Tecnología</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden w-24 h-24 mb-2">
                      <Image 
                        src="/images/humanos.png"
                        alt="Humanos"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-sm font-medium">Humanos</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden w-24 h-24 mb-2">
                      <Image 
                        src="/images/capital.png"
                        alt="Capital"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-sm font-medium">Capital</p>
                  </div>
                </div>
                
                <div className="border-t border-black mt-8 pt-8">
                  <h3 className="text-center text-xl font-serif">¿En qué problemas enfocarnos?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content continues below */}
      </main>
    </div>
  )
}
