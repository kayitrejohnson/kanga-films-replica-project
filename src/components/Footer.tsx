
const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Most Recently */}
          <div>
            <h3 className="text-white font-semibold mb-4">Most Recently</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">The Equalizer 3B - ROCKY</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">The Equalizer 3 - ROCKY</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">The Equalizer 2 - ROCKY</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">+250 788 821 628</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">mnyigangadriver@gmail.com</a></li>
            </ul>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="text-white font-semibold mb-4">WhatsApp</h3>
            <a 
              href="https://wa.me/250788821628" 
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              OSHAkur
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 OSHAkur Films. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Privacy Policy and Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
