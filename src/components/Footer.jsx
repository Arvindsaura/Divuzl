const Footer = () => (
  <footer className="bg-white text-black font-montserrat px-6 py-10 border-t border-gray-200">
    <div className="flex flex-col md:flex-row justify-between gap-10">
      {/* Left */}
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold leading-tight">
          You Heard<br />ENOUGH?
        </h2>
      </div>

      {/* Right */}
      <div className="flex flex-wrap justify-between gap-10 text-sm">
        {/* CTA */}
        <div className="w-full md:w-auto">
          <p className="max-w-xs font-medium">
            Embracing creativity and pushing the boundaries of what’s possible
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium"
          >
            Consult Us ↗
          </a>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-bold mb-2">COMPANY</h4>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">How We Work</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-bold mb-2">SERVICES</h4>
          <ul className="space-y-1">
            <li><a href="#">SEO & Organic Growth</a></li>
            <li><a href="#">Social Media Marketing</a></li>
            <li><a href="#">Paid Advertising (Google & Meta)</a></li>
            <li><a href="#">Content Strategy</a></li>
            <li><a href="#">Branding & Design</a></li>
            <li><a href="#">Web Development</a></li>
          </ul>
        </div>

        {/* LET'S CONNECT */}
        <div>
          <h4 className="font-bold mb-2">LET’S CONNECT</h4>
          <ul className="space-y-1">
            <li>Email: hello@divuzl.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>
              Location: Mumbai, India<br />
              <span className="text-gray-500">(Available Globally 🌍)</span>
            </li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="font-bold mb-2">FOLLOW US</h4>
          <ul className="space-y-1">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-10 text-center text-sm font-medium text-gray-700">
      <p>Smart Strategy. Bold Creativity. Real Results. That’s Divuzl.</p>
      <p className="mt-1 text-gray-600">© 2025 Divuzl. All rights reserved</p>
    </div>
  </footer>
)

export default Footer
