
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
              <li><a href="tel:+250795990130" className="text-gray-400 hover:text-white transition-colors">+250 795 990 130</a></li>
              <li><a href="tel:+250721708448" className="text-gray-400 hover:text-white transition-colors">+250 721 708 448</a></li>
              <li><a href="mailto:kjohnsonkayitare@gmail.com" className="text-gray-400 hover:text-white transition-colors">kjohnsonkayitare@gmail.com</a></li>
            </ul>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="text-white font-semibold mb-4">WhatsApp</h3>
            <div className="space-y-2">
              <a 
                href="https://wa.me/250795990130" 
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block w-full text-center"
              >
                Chat: +250 795 990 130
              </a>
              <a 
                href="https://wa.me/250721708448" 
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block w-full text-center"
              >
                Chat: +250 721 708 448
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2025 KANGA Films. All Rights Reserved.
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
