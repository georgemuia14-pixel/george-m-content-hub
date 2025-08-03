'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="font-['Pacifico'] text-2xl text-black">George M Content Studio</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">About</Link>
                <Link href="/services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Services</Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Portfolio</Link>
                <Link href="/blog" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Blog</Link>
                <Link href="/contact" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Contact</Link>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-yellow-600">
                <i className="ri-menu-line text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-top" 
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Professional%20writer%20working%20at%20a%20clean%20modern%20desk%20with%20laptop%2C%20books%2C%20and%20warm%20lighting%20creating%20an%20inspiring%20workspace%20atmosphere%2C%20minimal%20background%20with%20golden%20hour%20lighting%20streaming%20through%20large%20windows%2C%20sophisticated%20and%20elegant%20office%20environment&width=1920&height=1080&seq=hero1&orientation=landscape')`}}>
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            George M Content Studio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Helping brands and students grow through high-impact writing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              Hire Me
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What I Do Best</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional writing services that deliver results for businesses and students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-search-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">SEO Blog Writing</h3>
              <p className="text-gray-600 mb-6">
                Engaging blog posts optimized for search engines that drive organic traffic and boost your online presence.
              </p>
              <Link href="/services" className="text-yellow-600 hover:text-yellow-700 font-medium cursor-pointer whitespace-nowrap">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-graduation-cap-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Academic Writing</h3>
              <p className="text-gray-600 mb-6">
                High-quality academic papers, essays, and research content with proper citations and scholarly standards.
              </p>
              <Link href="/services" className="text-yellow-600 hover:text-yellow-700 font-medium cursor-pointer whitespace-nowrap">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-edit-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Editing & Proofreading</h3>
              <p className="text-gray-600 mb-6">
                Professional editing and proofreading services to polish your content and ensure clarity and accuracy.
              </p>
              <Link href="/services" className="text-yellow-600 hover:text-yellow-700 font-medium cursor-pointer whitespace-nowrap">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Content Strategy</h3>
              <p className="text-gray-600 mb-6">
                Strategic content planning and creation that aligns with your brand voice and marketing objectives.
              </p>
              <Link href="/services" className="text-yellow-600 hover:text-yellow-700 font-medium cursor-pointer whitespace-nowrap">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">Why Choose George M Content Studio?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Research-Driven Content</h3>
                    <p className="text-gray-600">Every piece is backed by thorough research and fact-checking to ensure accuracy and credibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">SEO Optimized</h3>
                    <p className="text-gray-600">Content that ranks well in search engines while maintaining readability and engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">Fast delivery without compromising on quality, meeting all your deadlines consistently.</p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-600">500+</div>
                      <div className="text-sm text-gray-500">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-600">98%</div>
                      <div className="text-sm text-gray-500">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-600">5+</div>
                      <div className="text-sm text-gray-500">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20content%20writer%20at%20work%20with%20multiple%20monitors%20showing%20research%20documents%20and%20writing%20projects%2C%20organized%20workspace%20with%20notebooks%20and%20reference%20materials%2C%20warm%20lighting%20creating%20productive%20atmosphere%2C%20modern%20clean%20office%20setup&width=600&height=800&seq=why2&orientation=portrait"
                alt="Professional workspace" 
                className="rounded-lg shadow-lg object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Content?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create content that not only informs but also converts. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              Start Your Project
            </Link>
            <a href="https://wa.me/254723894536" target="_blank" className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-['Pacifico'] text-2xl text-yellow-600 mb-4">George M Content Studio</h3>
              <p className="text-gray-400">
                Professional writing services for businesses and students who demand excellence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white cursor-pointer whitespace-nowrap">About</Link>
                <Link href="/services" className="block text-gray-400 hover:text-white cursor-pointer whitespace-nowrap">Services</Link>
                <Link href="/portfolio" className="block text-gray-400 hover:text-white cursor-pointer whitespace-nowrap">Portfolio</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white cursor-pointer whitespace-nowrap">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <i className="ri-mail-line mr-2 text-yellow-600"></i>
                  georgem.content@gmail.com
                </p>
                <a href="https://wa.me/254723894536" target="_blank" className="block text-gray-400 hover:text-white">
                  <i className="ri-whatsapp-line mr-2 text-green-500"></i>
                  WhatsApp: +254723894536
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 George M Content Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}