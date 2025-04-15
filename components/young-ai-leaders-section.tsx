import Link from "next/link"
import Image from "next/image"

export function YoungAILeadersSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-black">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-base sm:text-xl font-mono">
              <span className="font-bold">YOUNG AI LEADERS</span>
              <span className="ml-2">BOGOTÁ</span>
            </div>
            <div className="hidden md:flex space-x-4 lg:space-x-8 text-xs">
              <Link href="#" className="hover:underline">1. SOBRE NOSOTROS</Link>
              <Link href="#" className="hover:underline">2. ÁREAS DE ENFOQUE</Link>
              <Link href="#" className="hover:underline">3. MIEMBROS</Link>
              <Link href="#" className="hover:underline">4. ALIADOS</Link>
              <Link href="#" className="hover:underline">5. CONTACTO</Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 py-8 md:py-16">
          {/* Left Section */}
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">UN HUB PARA LA</h2>
          </div>

          {/* Middle Section */}
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="text-center">
              <div className="space-y-2 font-bold text-lg md:text-xl">
                <div className="relative">
                  <span className="relative z-10 px-2">DISRUPCIÓN</span>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></div>
                </div>
                <div className="relative">
                  <span className="relative z-10 px-2">INNOVACIÓN</span>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></div>
                </div>
                <div className="relative">
                  <span className="relative z-10 px-2">HUMANIDAD</span>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-1 flex flex-col justify-between items-center md:items-end">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl md:text-3xl font-bold">NUEVA GENERACIÓN</h2>
            </div>
            
            <div className="flex justify-center md:justify-end mt-8">
              <Image 
                src="/images/young-ai-logo.png"
                alt="Young AI Leaders Logo"
                width={100}
                height={100}
                className="rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              />
            </div>
          </div>
        </div>

        {/* Second Section - Content from the new image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 my-8 md:my-12 relative">
          {/* Horizontal line at the top - visible on medium screens and up */}
          <div className="absolute hidden md:block" style={{
            top: '0',
            left: '0',
            width: '50%',
            height: '1px',
            background: 'black',
            zIndex: '1'
          }}></div>
          
          {/* Vertical line to Alianzas - visible on medium screens and up */}
          <div className="absolute hidden md:block" style={{
            top: '0',
            left: '50%',
            width: '1px',
            height: '60%',
            background: 'black',
            zIndex: '1'
          }}></div>
          
          {/* Left Column - Text and Buttons */}
          <div className="p-4 md:p-8 flex flex-col justify-center relative">
            <div className="text-center mb-8 md:mb-10">
              <p className="text-lg sm:text-xl md:text-2xl font-serif max-w-md mx-auto leading-relaxed mt-0">
                Jóvenes transformando<br />
                ideas en soluciones<br />
                impactantes con IA para<br />
                los desafíos más urgentes<br />
                del mundo.
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-5 max-w-xs mx-auto">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSczCt2no75iMdfVK-Zs_9HTbR7GC95mEQ3eW88r3GBUADhIYg/viewform?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-2 md:py-3 px-6 md:px-8 rounded-full bg-[url('/images/green-texture.png')] bg-cover text-white text-center font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Aplica
              </a>
              <a 
                href="https://forms.gle/gr4aJuZzNWEPdJ5y9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-2 md:py-3 px-6 md:px-8 rounded-full bg-[url('/images/blue-texture.png')] bg-cover text-white text-center font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Quiero ser Aliado
              </a>
            </div>
          </div>
          
          {/* Right Column - Numbered Points */}
          <div className="pl-4 md:pl-10 py-6 md:py-10 relative">
            {/* Vertical line on the right side from Talento to Alianzas - visible on medium screens and up */}
            <div className="absolute hidden md:block top-0 right-0 w-0.5 h-[580px] bg-black"></div>
            
            <div className="space-y-8 md:space-y-10 max-w-lg">
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3">1. TALENTO</h3>
                <p className="text-black text-base md:text-lg font-serif leading-relaxed m-0">
                  Formamos integralmente a los<br />
                  miembros del hub creando<br />
                  equipos de trabajo de impacto<br />
                  para desarrollo de proyectos.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3">2. AI FOR GOOD</h3>
                <p className="text-black text-base md:text-lg font-serif leading-relaxed m-0">
                  Desarrollamos soluciones<br />
                  innovadoras con IA que<br />
                  aborden desafíos del mundo<br />
                  real.
                </p>
              </div>
              
              <div className="relative">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3">4. ALIANZAS</h3>
                <p className="text-black text-base md:text-lg font-serif leading-relaxed m-0">
                  Formamos alianzas con<br />
                  compañías de tecnología,<br />
                  gobiernos y cooperamos con<br />
                  cerca de 100 hubs alrededor del<br />
                  mundo
                </p>
              </div>
              
              {/* 3 Palancas Section */}
              <div className="mt-12 md:mt-16 relative">
                {/* Vertical line on the left - visible on all screens */}
                <div className="absolute top-0 left-0 w-0.5 h-full bg-black"></div>
                
                <h3 className="text-center text-lg md:text-xl font-bold mb-6 md:mb-8">3 Palancas</h3>
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2">
                      <Image 
                        src="/images/tecnologia.png"
                        alt="Tecnología"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-xs sm:text-sm font-medium">Tecnología</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2">
                      <Image 
                        src="/images/humanos.png"
                        alt="Humanos"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-xs sm:text-sm font-medium">Humanos</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2">
                      <Image 
                        src="/images/capital.png"
                        alt="Capital"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="text-center text-xs sm:text-sm font-medium">Capital</p>
                  </div>
                </div>
                
                <div className="border-t border-black mt-6 md:mt-8 pt-6 md:pt-8">
                  <h3 className="text-center text-lg md:text-xl font-serif">¿En qué problemas enfocarnos?</h3>
                </div>
                
                {/* Links section in right corner */}
                <div className="mt-10 flex flex-col items-end text-right space-y-3">
                  <Link href="#" className="text-sm md:text-base hover:underline">MENSAJE DEL LÍDER</Link>
                  <Link href="#" className="text-sm md:text-base hover:underline">LA CARRERA HACIA IA PARA EL BIEN</Link>
                  <Link href="#" className="text-sm md:text-base hover:underline">MIEMBROS</Link>
                  <Link href="#" className="text-sm md:text-base hover:underline">MENTORES</Link>
                  <Link href="#" className="text-sm md:text-base hover:underline">SOCIOS</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific/AI Imagery Grid Section */}
        <div className="mt-16 md:mt-24">
          <Image 
            src="/images/ai-grid.png" 
            alt="AI visualization grid" 
            width={1200} 
            height={800} 
            className="w-full"
          />
        </div>

        {/* Team Members Section */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Row 1 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team/vs.jpeg" 
                  alt="Jorge Esteban" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Valeria Soler</h3>
              <p className="text-center text-sm mt-2 max-w-xs">
                "Tengo el trabajo soñado, impulsando el potencial de la tecnología para las problemáticas más críticas de la humanidad!"
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team/dg.jpeg" 
                  alt="ValeriaSoler" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Daniel Gordillo</h3>
              <p className="text-center text-sm mt-2 max-w-xs">
                "El emprendimiento nace en cada uno de nosotros, impulsándonos a transformar el mundo con innovación y colaboración"
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team/ar.jpeg" 
                  alt="Alexandra Rojas" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Alexandra Rojas</h3>
              <p className="text-center text-sm mt-2 max-w-xs">
                "Transformo datos en decisiones, y tecnología en impacto real"
              </p>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team/Sebsai.jpg" 
                  alt="SebastianMelo" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Sebastian Melo</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team/jp.jpeg" 
                  alt="Jesus Ortiz" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Jesus Ortiz</h3>
              <p className="text-center text-sm mt-2 max-w-xs">
                "Cultivo futuros regenerativos hacia una transición ecosocial, transformando sitemas complejos a traves del diseño que conecta y trasciende"
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team/joan-escobar.jpg" 
                  alt="Joan Escobar" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Joan Escobar</h3>
            </div>
            
            {/* Row 3 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team/team-member-7.jpg" 
                  alt="Team Member" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Nombre Apellido</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                <Image 
                  src="/images/team/team-member-8.jpg" 
                  alt="Team Member" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Nombre Apellido</h3>
            </div>
          </div>
        </div>

        {/* Contact and Application Section */}
        <div className="mt-16 md:mt-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Contacto</h2>
            
            <div className="max-w-3xl mx-auto">
              {/* Contact Information */}
              <div className="text-center mb-12">
                <p className="text-lg mb-4">Para más información:</p>
                <a href="mailto:contacto@youngaileadershub.org" className="text-lg font-medium hover:underline">
                  contacto@youngaileadershub.org
                </a>
              </div>
              
              {/* Application Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSczCt2no75iMdfVK-Zs_9HTbR7GC95mEQ3eW88r3GBUADhIYg/viewform?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-full bg-[url('/images/green-texture.png')] bg-cover text-white text-center font-semibold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                >
                  Aplicar
                </a>
                
                <a 
                  href="https://forms.gle/gr4aJuZzNWEPdJ5y9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-full bg-[url('/images/blue-texture.png')] bg-cover text-white text-center font-semibold text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                >
                  Quiero ser aliado
                </a>
              </div>
            </div>
            
            {/* Partners Section */}
            <div className="mt-16">
              <h3 className="text-xl md:text-2xl font-bold text-center mb-8">Nuestros Aliados</h3>
              
              <div className="flex justify-center">
                <div className="w-40 h-40 p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <Image 
                    src="/images/ecci-logo.jpg" 
                    alt="Universidad ECCI" 
                    width={120} 
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Additional Information */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Áreas de Enfoque</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Educación</li>
                    <li>IA</li>
                    <li>Energía</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Próximamente artículos detallados sobre cada área de enfoque.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Sobre Nosotros</h3>
                  <p className="mb-4">
                    Somos parte de la red global de Young AI Leaders, conectados con la UIT - AI for Good.
                  </p>
                  <p>
                    El Hub de Bogotá trabaja en colaboración con más de 100 hubs alrededor del mundo para 
                    impulsar soluciones de IA que aborden los desafíos más urgentes de la humanidad.
                  </p>
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
