const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <h1 className="text-3xl font-bold text-white mb-12 text-center">CONTACT</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1e1e1e] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-6">REPRESENTED BY</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Studio */}
            <div className="border-l-2 border-[#00e5ff] pl-4">
              <h3 className="text-xl font-medium text-white mb-2">COLOR STUDIO</h3>
              <p className="text-gray-300 mb-1">(US & EUROPE)</p>
              <p className="text-gray-300 mb-1">AGENT NAME</p>
              <a 
                href="mailto:agent@colorstudio.com" 
                className="text-[#00e5ff] hover:underline mb-3 inline-block"
              >
                agent@colorstudio.com
              </a>
              <p className="text-gray-300">+1 123 456 7890</p>
            </div>
            
            {/* Second Studio */}
            <div className="border-l-2 border-[#00e5ff] pl-4">
              <h3 className="text-xl font-medium text-white mb-2">FILM LAB</h3>
              <p className="text-gray-300 mb-1">(ASIA & AUSTRALIA)</p>
              <p className="text-gray-300 mb-1">REPRESENTATIVE NAME</p>
              <a 
                href="mailto:rep@filmlab.com" 
                className="text-[#00e5ff] hover:underline mb-3 inline-block"
              >
                rep@filmlab.com
              </a>
              <a 
                href="mailto:color@filmlab.com" 
                className="text-[#00e5ff] hover:underline mb-3 inline-block"
              >
                color@filmlab.com
              </a>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white mb-6">PERSONAL</h2>
            <a 
              href="mailto:your.name@colorist.com" 
              className="text-[#00e5ff] hover:underline"
            >
              your.name@colorist.com
            </a>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-white mb-6">SOCIAL</h2>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#00e5ff] transition-colors"
              >
                INSTAGRAM
              </a>
              <a 
                href="https://vimeo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#00e5ff] transition-colors"
              >
                VIMEO
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#00e5ff] transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
};

export default ContactPage;
