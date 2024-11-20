import { Menu, X, Code2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHireUsOpen, setIsHireUsOpen] = useState(false);

  const hireUsOptions = [
    { title: 'Hire iOS Developers', href: '#hire-ios' },
    { title: 'Hire Flutter Developers', href: '#hire-flutter' },
    { title: 'Hire DevOps Engineer', href: '#hire-devops' },
    { title: 'Hire MEAN Stack Developers', href: '#hire-mean' },
    { title: 'Hire Java Developers', href: '#hire-java' },
    { title: 'Hire Selenium Tester', href: '#hire-selenium' },
    { title: 'Hire Python App Developers', href: '#hire-python' },
    { title: 'Hire Ionic Developers', href: '#hire-ionic' },
    { title: 'Hire Node.JS Developers', href: '#hire-nodejs' },
    { title: 'Hire Android Developers', href: '#hire-android' },
    { title: 'Hire ReactJS Developers', href: '#hire-react' },
    { title: 'Hire AI & ML Experts', href: '#hire-ai-ml' },
    { title: 'Hire Dedicated MERN Stack Developers', href: '#hire-mern' },
    { title: 'Hire UI UX Designer', href: '#hire-ui-ux' },
    { title: 'Hire .NET Developers', href: '#hire-dotnet' },
    { title: 'Hire Angular Developers', href: '#hire-angular' },
    { title: 'Hire React Native Developers', href: '#hire-react-native' },
    { title: 'Hire Vue.JS Developers', href: '#hire-vue' },
    { title: 'Hire React Native Developers', href: '#hire-react-native' },
    { title: 'Hire Data Engineer', href: '#hire-data' },
    { title: 'Hire Shopify Developers', href: '#hire-shopify' }
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Cognixs</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            
            {/* Hire Us Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors"
                onClick={() => setIsHireUsOpen(!isHireUsOpen)}
                onMouseEnter={() => setIsHireUsOpen(true)}
                onMouseLeave={() => setIsHireUsOpen(false)}
              >
                <span>Hire Us</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Mega Dropdown Menu */}
              <div 
                className={`absolute left-0 top-full mt-2 w-[90vw] max-w-6xl bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 ${
                  isHireUsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsHireUsOpen(true)}
                onMouseLeave={() => setIsHireUsOpen(false)}
                style={{ 
                  transform: 'translateX(-80%)',
                  maxHeight: '80vh',
                  overflowY: 'auto'
                }}
              >
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-2">
                    {hireUsOptions.map((option, index) => (
                      <a
                        key={index}
                        href={option.href}
                        className="text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-1 rounded-lg transition-colors"
                      >
                        {option.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <a href="#home" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
              
              {/* Mobile Hire Us Section */}
              <div className="space-y-2">
                <div className="font-medium text-gray-800">Hire Us</div>
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {hireUsOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.href}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {option.title}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-center">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}