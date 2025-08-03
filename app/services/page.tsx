
'use client';

import Link from 'next/link';

export default function Services() {
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
                <Link href="/about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">About</Link>
                <Link href="/services" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Services</Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Professional Writing Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From SEO-optimized blog posts to academic research papers, I deliver content that engages your audience and achieves your goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* SEO Writing */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-search-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">SEO Writing</h3>
              <p className="text-gray-600 mb-6">
                Drive organic traffic with expertly crafted content that ranks well in search engines while engaging your readers.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">What's Included:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Keyword research and optimization
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Meta descriptions and title tags
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Internal linking strategy
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Readability optimization
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Fact-checking and citations
                  </li>
                </ul>
              </div>
              
              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-black mb-2">Starting at $75</div>
                <p className="text-gray-600 text-sm mb-4">Per 1000 words</p>
                <Link href="/contact" className="w-full bg-yellow-600 hover:bg-yellow-700 text-black py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap block text-center">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Academic Research */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-graduation-cap-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Academic Research Help</h3>
              <p className="text-gray-600 mb-6">
                High-quality academic writing with rigorous research methodology and proper citation standards.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">What's Included:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Literature review and analysis
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Proper academic formatting
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Credible source verification
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Plagiarism-free guarantee
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Multiple citation styles
                  </li>
                </ul>
              </div>
              
              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-black mb-2">Starting at $120</div>
                <p className="text-gray-600 text-sm mb-4">Per 1000 words</p>
                <Link href="/contact" className="w-full bg-yellow-600 hover:bg-yellow-700 text-black py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap block text-center">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Content Strategy */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Content Strategy</h3>
              <p className="text-gray-600 mb-6">
                Strategic content planning that aligns with your brand voice and marketing objectives.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">What's Included:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Content audit and analysis
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Editorial calendar creation
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Brand voice development
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Competitor analysis
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Performance metrics setup
                  </li>
                </ul>
              </div>
              
              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-black mb-2">Starting at $500</div>
                <p className="text-gray-600 text-sm mb-4">Per project</p>
                <Link href="/contact" className="w-full bg-yellow-600 hover:bg-yellow-700 text-black py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap block text-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive writing solutions to meet all your content needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-edit-line text-xl text-yellow-600"></i>
              </div>
              <h4 className="font-semibold text-black mb-2">Copy Editing</h4>
              <p className="text-gray-600 text-sm">Professional editing and proofreading services</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-xl text-yellow-600"></i>
              </div>
              <h4 className="font-semibold text-black mb-2">Email Marketing</h4>
              <p className="text-gray-600 text-sm">Engaging email campaigns that convert</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-share-line text-xl text-yellow-600"></i>
              </div>
              <h4 className="font-semibold text-black mb-2">Social Media</h4>
              <p className="text-gray-600 text-sm">Compelling social media content creation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-text-line text-xl text-yellow-600"></i>
              </div>
              <h4 className="font-semibold text-black mb-2">White Papers</h4>
              <p className="text-gray-600 text-sm">In-depth industry reports and analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">My Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality results and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-xl font-semibold text-black mb-3">Consultation</h4>
              <p className="text-gray-600">We discuss your project goals, target audience, and requirements in detail.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-xl font-semibold text-black mb-3">Research</h4>
              <p className="text-gray-600">Thorough research and analysis to ensure accuracy and relevance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-xl font-semibold text-black mb-3">Creation</h4>
              <p className="text-gray-600">Writing and crafting content that meets your specifications and standards.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="text-xl font-semibold text-black mb-3">Delivery</h4>
              <p className="text-gray-600">Final review, revisions if needed, and delivery of polished content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create content that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              View Portfolio
            </Link>
          </div>
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
