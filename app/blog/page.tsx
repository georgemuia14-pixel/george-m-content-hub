
'use client';

import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 SEO Writing Techniques That Actually Work in 2024',
      excerpt: 'Discover the latest SEO writing strategies that combine search engine optimization with engaging content creation.',
      date: 'March 15, 2024',
      category: 'SEO',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20digital%20marketing%20workspace%20with%20SEO%20analytics%20dashboard%2C%20keyword%20research%20tools%2C%20and%20content%20optimization%20interface%2C%20professional%20blogger%20setup%20with%20multiple%20monitors%20showing%20search%20rankings&width=600&height=400&seq=blog1&orientation=landscape'
    },
    {
      id: 2,
      title: 'The Complete Guide to Academic Research Writing',
      excerpt: 'Master the art of academic writing with proven methodologies, citation techniques, and research strategies.',
      date: 'March 10, 2024',
      category: 'Academic',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Academic%20research%20environment%20with%20scholarly%20books%2C%20research%20papers%2C%20and%20laptop%20showing%20academic%20databases%2C%20university%20library%20setting%20with%20reference%20materials%20and%20citation%20guides&width=600&height=400&seq=blog2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Content Strategy Frameworks for B2B Companies',
      excerpt: 'Build a robust content strategy that aligns with your business goals and drives measurable results.',
      date: 'March 5, 2024',
      category: 'Strategy',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Business%20strategy%20planning%20workspace%20with%20content%20marketing%20frameworks%2C%20editorial%20calendars%2C%20and%20strategic%20planning%20documents%2C%20professional%20office%20setting%20with%20planning%20boards%20and%20analytics&width=600&height=400&seq=blog3&orientation=landscape'
    },
    {
      id: 4,
      title: 'How to Write Headlines That Convert Readers to Customers',
      excerpt: 'Learn the psychology behind compelling headlines and discover formulas that drive engagement and conversions.',
      date: 'February 28, 2024',
      category: 'Copywriting',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Creative%20copywriting%20workspace%20with%20headline%20examples%2C%20conversion%20metrics%2C%20and%20marketing%20psychology%20books%2C%20writer%20desk%20setup%20with%20compelling%20headline%20formulas%20and%20analytics%20dashboard&width=600&height=400&seq=blog4&orientation=landscape'
    },
    {
      id: 5,
      title: 'The Future of Content Marketing: AI and Human Creativity',
      excerpt: 'Explore how AI tools are transforming content creation while human creativity remains irreplaceable.',
      date: 'February 22, 2024',
      category: 'Industry Trends',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20content%20creation%20workspace%20combining%20AI%20technology%20with%20human%20creativity%2C%20modern%20office%20with%20AI%20interfaces%2C%20digital%20screens%2C%20and%20creative%20writing%20tools%2C%20innovative%20marketing%20technology%20setup&width=600&height=400&seq=blog5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Building Authority Through Thought Leadership Content',
      excerpt: 'Establish yourself as an industry expert through strategic thought leadership content that builds trust and credibility.',
      date: 'February 18, 2024',
      category: 'Strategy',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20thought%20leadership%20setup%20with%20industry%20publications%2C%20speaking%20engagement%20materials%2C%20and%20authority%20building%20content%2C%20executive%20workspace%20with%20leadership%20books%20and%20presentation%20materials&width=600&height=400&seq=blog6&orientation=landscape'
    }
  ];

  const categories = ['All', 'SEO', 'Academic', 'Strategy', 'Copywriting', 'Industry Trends'];

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
                <Link href="/portfolio" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Portfolio</Link>
                <Link href="/blog" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Blog</Link>
                <Link href="/contact" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Writing Insights & Tips</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Expert advice on SEO writing, content strategy, and professional writing techniques to elevate your content game.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto">
                <img 
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <i className="ri-calendar-line mr-2"></i>
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <i className="ri-time-line mr-2"></i>
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap self-start">
                  Read Full Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button 
                key={category}
                className="px-6 py-3 rounded-full bg-gray-100 hover:bg-yellow-100 text-gray-700 hover:text-yellow-800 font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-time-line mr-1"></i>
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 hover:text-yellow-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-calendar-line mr-2"></i>
                      {post.date}
                    </div>
                    <button className="text-yellow-600 hover:text-yellow-700 font-medium cursor-pointer whitespace-nowrap">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-black mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get weekly writing tips, industry insights, and exclusive content strategies delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                required
              />
              <button 
                type="submit"
                className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime. Your email is safe with us.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Professional Writing Services?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create content that engages your audience and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap">
              Hire Me
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
