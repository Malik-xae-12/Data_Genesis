import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-blue-green p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Data Genesis Solutions</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Trusted for over 5+ years. Transforming businesses through
              data-driven solutions, enterprise automation, and expert training
              since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#training"
                  className="text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  Training
                </a>
              </li>
              <li>
                <a
                  href="#job-support"
                  className="text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  Job Support
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#training"
                  className="text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  Data Training
                </a>
              </li>
              <li>
                <a
                  href="#job-support"
                  className="text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  Job Support
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  Freelance Projects
                </a>
              </li>
              <li>
                <a
                  href="#internships"
                  className="text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  Internships
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-brand-green-primary mt-0.5 flex-shrink-0"
                />
                <div className="text-sm text-gray-400">
                  <p>WeWork Olympia Cyberspace</p>
                  <p>Guindy, Chennai</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  size={18}
                  className="text-brand-green-primary flex-shrink-0"
                />
                <a
                  href="tel:+916374097419"
                  className="text-sm text-gray-400 hover:text-brand-green-primary transition-colors"
                >
                  +91 9444233285
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail
                  size={18}
                  className="text-brand-green-primary flex-shrink-0"
                />
                <a
                  href="mailto:datagenesissolutions07@gmail.com"
                  className="text-sm text-gray-400 hover:text-brand-green-primary transition-colors break-all"
                >
                  datagenesissolutions07@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            <p>
              © {currentYear} Data Genesis Solutions India Pvt Ltd. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-brand-blue-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-blue-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-blue-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
          <p>Powered by Data Genesis Solutions</p>
        </div>
      </div>
    </footer>
  );
}
