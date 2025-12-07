import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-bold text-lg">C</div>
              <span className="font-heading font-bold text-lg sm:text-xl">Coded Inc</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering UK businesses to win tenders with expert research and support.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Tenders", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Tender Scouting", "Bid Writing", "Tender Review", "Consulting"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>London, UK</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} />
                <a href="mailto:codedincorporate@mail.co.uk" className="hover:text-red-600 transition-colors break-all">
                  codedincorporate@mail.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} />
                <a href="tel:+‪447482793753‬" className="hover:text-red-600 transition-colors">
                  +44 7848 166750
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <p className="text-gray-400 text-sm text-center">&copy; 2025 Coded Incorporate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
