const Footer = () => {
  return (
    <footer className="bg-[#121212] py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Film Colorist. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-[#00e5ff] text-sm transition-colors"
            >
              PRIVACY POLICY
            </a>
            <a 
              href="#top" 
              className="text-gray-400 hover:text-[#00e5ff] text-sm transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              BACK TO TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
