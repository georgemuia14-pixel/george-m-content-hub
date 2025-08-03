
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Complete SEO Guide for E-commerce Websites',
      category: 'seo',
      client: 'TechCommerce Solutions',
      description: 'A comprehensive 3,500-word guide covering on-page SEO, technical optimization, and content strategy specifically for online retailers.',
      results: '45% increase in organic traffic within 3 months',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20dashboard%20showing%20SEO%20analytics%20and%20growth%20charts%2C%20clean%20professional%20interface%20with%20rising%20traffic%20metrics%2C%20laptop%20screen%20displaying%20colorful%20data%20visualizations&width=600&height=400&seq=port1&orientation=landscape',
      tags: ['SEO', 'E-commerce', 'Content Strategy']
    },
    {
      id: 2,
      title: 'Climate Change Impact on Urban Planning: Research Paper',
      category: 'academic',
      client: 'University Research Department',
      description: 'Academic research paper examining the relationship between climate change projections and modern urban development strategies.',
      results: 'Published in Journal of Urban Studies, 150+ citations',
      image: 'https://readdy.ai/api/search-image?query=Academic%20research%20paper%20layout%20with%20climate%20change%20data%20charts%20and%20urban%20planning%20blueprints%2C%20professional%20academic%20presentation%20with%20graphs%20showing%20environmental%20impact%20statistics&width=600&height=400&seq=port2&orientation=landscape',
      tags: ['Academic Writing', 'Research', 'Environmental Studies']
    },
    {
      id: 3,
      title: 'Content Marketing Strategy for SaaS Startup',
      category: 'strategy',
      client: 'CloudFlow Analytics',
      description: 'Comprehensive content strategy including editorial calendar, brand voice guidelines, and 12-month content roadmap.',
      results: '200% increase in qualified leads, 85% engagement boost',
      image: 'https://readdy.ai/api/search-image?query=Strategic%20planning%20workspace%20with%20content%20marketing%20materials%2C%20editorial%20calendar%20on%20wall%2C%20laptop%20showing%20analytics%20dashboard%2C%20creative%20workspace%20with%20strategy%20documents%20and%20planning%20boards&width=600&height=400&seq=port3&orientation=landscape',
      tags: ['Content Strategy', 'SaaS', 'Lead Generation']
    },
    {
      id: 4,
      title: 'Financial Technology Trends: Industry Report',
      category: 'seo',
      client: 'FinTech Today Magazine',
      description: 'In-depth analysis of emerging fintech trends, including blockchain adoption, digital banking evolution, and regulatory changes.',
      results: '50K+ social shares, featured in 15 industry publications',
      image: 'https://readdy.ai/api/search-image?query=Financial%20technology%20concept%20with%20digital%20banking%20interface%2C%20blockchain%20visualizations%2C%20and%20modern%20fintech%20dashboard%20displaying%20cryptocurrency%20and%20digital%20payment%20trends&width=600&height=400&seq=port4&orientation=landscape',
      tags: ['Industry Analysis', 'FinTech', 'Thought Leadership']
    },
    {
      id: 5,
      title: 'Psychological Effects of Social Media: Literature Review',
      category: 'academic',
      client: 'Psychology Department, Stanford',
      description: 'Systematic literature review analyzing 150+ peer-reviewed studies on social media\'s psychological impact across different age groups.',
      results: 'Accepted for publication, 4.8/5 peer review rating',
      image: 'https://readdy.ai/api/search-image?query=Academic%20literature%20review%20workspace%20with%20psychology%20research%20papers%2C%20social%20media%20analytics%20charts%2C%20academic%20journals%20and%20research%20methodology%20diagrams%2C%20scholarly%20presentation%20style&width=600&height=400&seq=port5&orientation=landscape',
      tags: ['Literature Review', 'Psychology', 'Social Media Research']
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
                <Link href="/services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Services</Link>
                <Link href="/portfolio" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Portfolio</Link>
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
          <h1 className="text-5xl font-bold text-black mb-6">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A selection of my best work showcasing expertise across SEO writing, academic research, and content strategy.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all' 
                  ? 'bg-yellow-600 text-black' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Work
            </button>
            <button 
              onClick={() => setActiveFilter('seo')}
              className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'seo' 
                  ? 'bg-yellow-600 text-black' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              SEO Writing
            </button>
            <button 
              onClick={() => setActiveFilter('academic')}
              className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'academic' 
                  ? 'bg-yellow-600 text-black' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Academic Research
            </button>
            <button 
              onClick={() => setActiveFilter('strategy')}
              className={`px-6 py-3 rounded-full font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'strategy' 
                  ? 'bg-yellow-600 text-black' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Content Strategy
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">Client: {item.client}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-black mb-2">Results Achieved:</h4>
                    <p className="text-gray-700">{item.results}</p>
                  </div>
                  
                  <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block">
                    Request Similar Work
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feedback from satisfied clients across various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "George delivered exceptional SEO content that significantly boosted our organic traffic. His research skills and attention to detail are outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-yellow-600">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Sarah Mitchell</h4>
                  <p className="text-gray-600 text-sm">Marketing Director, TechCommerce</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The academic paper George wrote exceeded our expectations. His methodology was rigorous and the writing was clear and compelling."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-yellow-600">DR</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Dr. Robert Chen</h4>
                  <p className="text-gray-600 text-sm">Professor, Stanford University</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The content strategy George developed transformed our marketing efforts. We saw immediate improvements in engagement and lead quality."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-yellow-600">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Michael Johnson</h4>
                  <p className="text-gray-600 text-sm">CEO, CloudFlow Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create content that delivers results like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              Start Your Project
            </Link>
            <Link href="/services" className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              View Services
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
