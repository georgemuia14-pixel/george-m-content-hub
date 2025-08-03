
'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="font-['Pacifico'] text-2xl text-black cursor-pointer">George Content Studio</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Home</Link>
                <Link href="/about" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">About</Link>
                <Link href="/services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Services</Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Portfolio</Link>
                <Link href="/blog" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Blog</Link>
                <Link href="/contact" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold text-black mb-8">Meet George</h1>
              <p className="text-xl text-gray-600 mb-8">
                With over 7 years of experience in content creation and digital marketing, I've helped hundreds of businesses and individuals tell their stories through compelling, research-driven content.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">500+</div>
                  <div className="text-sm text-gray-500">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">98%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">7+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20freelance%20writer%20in%20modern%20office%20setting%2C%20warm%20lighting%2C%20books%20and%20writing%20materials%20in%20background%2C%20approachable%20yet%20professional%20demeanor%2C%20clean%20minimal%20workspace%20with%20laptop%20and%20notebooks&width=600&height=800&seq=about1&orientation=portrait"
                alt="George - Professional Writer" 
                className="rounded-lg shadow-lg object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">My Story</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              My journey into professional writing began during my graduate studies in English Literature, where I discovered my passion for transforming complex ideas into clear, engaging content that resonates with readers.
            </p>
            
            <p className="text-lg mb-8">
              Over the past seven years, I've had the privilege of working with startups, established businesses, academic institutions, and individual clients across various industries. From crafting SEO-optimized blog posts that drive organic traffic to conducting in-depth research for academic papers, I've built my reputation on three core principles:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Trust</h3>
                <p className="text-gray-600">Every project is handled with complete confidentiality and professional integrity.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-eye-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Clarity</h3>
                <p className="text-gray-600">Complex topics become accessible through clear, well-structured writing.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-star-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Excellence</h3>
                <p className="text-gray-600">Continuous learning and improvement ensure top-quality results every time.</p>
              </div>
            </div>
            
            <p className="text-lg mb-8">
              When I'm not writing, you'll find me reading the latest industry publications, attending digital marketing conferences, or hiking local trails for inspiration. I believe that great writing comes from a combination of technical skill, creative thinking, and genuine curiosity about the world around us.
            </p>
            
            <p className="text-lg">
              Ready to work together? I'd love to learn about your project and discuss how we can achieve your content goals.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Education & Credentials</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Master of Arts in English Literature</h4>
                  <p className="text-gray-600">University of California, Berkeley • 2016</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Arts in Journalism</h4>
                  <p className="text-gray-600">Northwestern University • 2014</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-black mb-4">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Google Analytics Certified</h4>
                  <p className="text-gray-600">Advanced Web Analytics • 2023</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">HubSpot Content Marketing</h4>
                  <p className="text-gray-600">Inbound Marketing Specialist • 2022</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">SEMrush SEO Toolkit</h4>
                  <p className="text-gray-600">Advanced SEO Strategies • 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your ideas into compelling content? I'd love to hear about your project.
          </p>
          <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-['Pacifico'] text-2xl text-yellow-600 mb-4">George Content Studio</h3>
              <p className="text-gray-400">
                Professional freelance writing services for businesses and individuals who demand excellence.
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
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-400">SEO Writing</p>
                <p className="text-gray-400">Academic Research</p>
                <p className="text-gray-400">Content Strategy</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 George Content Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
