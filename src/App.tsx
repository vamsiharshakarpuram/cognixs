import Header from './components/Header';
import Footer from './components/Footer';
import { ArrowRight, Code2, Cpu, Globe2, Laptop, LineChart, MessageSquare, Rocket, Users2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                We Build Amazing <span className="text-indigo-600">Software Solutions</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your business with cutting-edge technology solutions tailored to your needs.
                We deliver innovation that drives growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive software solutions to help businesses thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Globe2 className="h-8 w-8" />, title: 'Web Development', description: 'Custom websites and web applications built with modern technologies.' },
              { icon: <Laptop className="h-8 w-8" />, title: 'Mobile Development', description: 'Native and cross-platform mobile apps for iOS and Android.' },
              { icon: <Cpu className="h-8 w-8" />, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and deployment solutions.' },
              { icon: <LineChart className="h-8 w-8" />, title: 'Data Analytics', description: 'Transform your data into actionable insights.' },
              { icon: <Code2 className="h-8 w-8" />, title: 'API Development', description: 'Robust and scalable API solutions for your business.' },
              { icon: <Users2 className="h-8 w-8" />, title: 'IT Consulting', description: 'Expert guidance on your technology decisions.' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Our team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-6">
                We're a team of passionate developers, designers, and problem solvers dedicated to creating 
                innovative software solutions. With years of experience in the industry, we understand what it 
                takes to deliver successful projects that drive business growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <div className="text-2xl font-bold text-indigo-600">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <div className="text-2xl font-bold text-indigo-600">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our custom software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Schedule a Call
            </a>
            <a href="#" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center">
              <Rocket className="mr-2 h-5 w-5" />
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;