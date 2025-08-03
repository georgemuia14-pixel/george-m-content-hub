
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="font-[\'Pacifico\'] text-2xl text-black cursor-pointer">George Content Studio</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">About</Link>
                <Link href="/services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Services</Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Portfolio</Link>
                <Link href="/blog" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Blog</Link>
                <Link href="/contact" className="text-black hover:text-yellow-600 px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-black mb-6">Let's Work Together</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to elevate your content? Share your project details and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-black mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-xl text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Email</h3>
                    <p className="text-gray-600">georgem.content@gmail.com</p>
                    <p className="text-gray-500 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <i className="ri-whatsapp-line text-xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">WhatsApp</h3>
                    <a href="https://wa.me/254723894536" target="_blank" className="text-gray-600 hover:text-green-600">
                      +254723894536
                    </a>
                    <p className="text-gray-500 text-sm">Quick responses for urgent projects</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <i className="ri-time-line text-xl text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Response Time</h3>
                    <p className="text-gray-600">Same day for urgent projects</p>
                    <p className="text-gray-500 text-sm">24-48 hours for detailed quotes</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-6 bg-green-50 rounded-lg text-center">
                <h3 className="font-semibold text-black mb-4">Prefer WhatsApp?</h3>
                <a
                  href="https://wa.me/254723894536"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line text-xl"></i>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-black mb-8">Start Your Project</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your message has been sent successfully. I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm pr-8"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Service Needed *
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm pr-8 appearance-none"
                            required
                          >
                            <option value="">Select a service</option>
                            <option value="seo-writing">SEO Writing</option>
                            <option value="academic-research">Academic Research</option>
                            <option value="content-strategy">Content Strategy</option>
                            <option value="copy-editing">Copy Editing</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <i className="ri-arrow-down-s-line text-gray-400"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Budget Range
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm pr-8 appearance-none"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-500">Under $500</option>
                            <option value="500-1000">$500 - $1,000</option>
                            <option value="1000-2500">$1,000 - $2,500</option>
                            <option value="2500-5000">$2,500 - $5,000</option>
                            <option value="over-5000">Over $5,000</option>
                          </select>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <i className="ri-arrow-down-s-line text-gray-400"></i>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-black mb-2">
                          Timeline
                        </label>
                        <div className="relative">
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm pr-8 appearance-none"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP (Rush job)</option>
                            <option value="1-week">Within 1 week</option>
                            <option value="2-weeks">2-3 weeks</option>
                            <option value="1-month">1 month</option>
                            <option value="flexible">Flexible</option>
                          </select>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <i className="ri-arrow-down-s-line text-gray-400"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Project Description *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        maxLength={500}
                        placeholder="Tell me about your project, goals, target audience, and any specific requirements..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm resize-vertical"
                        required
                      />
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.message.length}/500 characters
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <p className="text-sm text-gray-500">
                        * Required fields
                      </p>
                      <button
                        type="submit"
                        disabled={formData.message.length > 500}
                        className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-black px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about my writing services.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-3">What is your typical turnaround time?</h3>
              <p className="text-gray-600">
                Standard projects are typically completed within 5-7 business days. Rush jobs can be accommodated with 24-48 hour turnaround for an additional fee. Academic papers may require longer depending on research complexity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-3">Do you offer revisions?</h3>
              <p className="text-gray-600">
                Yes! I include two rounds of revisions with every project to ensure complete satisfaction. Additional revisions beyond scope changes can be provided at a reduced hourly rate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-3">What industries do you work with?</h3>
              <p className="text-gray-600">
                I work with clients across various industries including technology, healthcare, finance, education, e-commerce, and more. My research skills allow me to quickly understand new industries and create expert-level content.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-3">How do you ensure content originality?</h3>
              <p className="text-gray-600">
                All content is 100% original and written from scratch. I use professional plagiarism detection tools and provide reports upon request. Every piece includes proper citations and references when required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-[\'Pacifico\'] text-2xl text-yellow-600 mb-4">George Content Studio</h3>
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
