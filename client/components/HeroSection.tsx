import { ArrowRight, Clock, MapPin, Phone, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-brand-green-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green-light/10 border border-brand-green-primary/20 rounded-full mb-6">
              <Clock size={16} className="text-brand-green-primary" />
              <span className="text-sm font-semibold text-brand-green-primary">
                5+ Years of Industry Excellence
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Data Genesis Solutions
              <span className="block bg-gradient-to-r from-brand-blue-primary to-brand-green-primary bg-clip-text text-transparent">
                India Pvt Ltd
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trusted by professionals for over 5+ years. Transform your career
              with expert training in data technologies, cloud platforms, and
              DevOps. Supporting real production environments since 2019 with
              real-time job support, freelance projects, and comprehensive
              internship programs.
            </p>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-green-primary/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-green-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Hands-on Training
                  </p>
                  <p className="text-sm text-gray-600">
                    100% real-time practice
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue-light/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-blue-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Live Mentors</p>
                  <p className="text-sm text-gray-600">Corporate trainers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-green-primary/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-green-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Job Support</p>
                  <p className="text-sm text-gray-600">Real-time assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue-light/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-brand-blue-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Internships</p>
                  <p className="text-sm text-gray-600">Placement assistance</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#training"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-blue-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Join Training
                <ArrowRight size={20} />
              </a>
              <a
                href="#job-support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-blue-primary text-brand-blue-primary font-semibold rounded-lg hover:bg-brand-blue-primary/5 transition-all duration-300"
              >
                Request Job Support
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-green-primary text-brand-green-primary font-semibold rounded-lg hover:bg-brand-green-primary/5 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-blue-primary" size={20} />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">Guindy, Chennai</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brand-green-primary" size={20} />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a
                    href="tel:+916374097419"
                    className="text-gray-600 hover:text-brand-green-primary transition-colors"
                  >
                    +91 9444233285
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-brand-blue-primary" size={20} />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:datagenesissolutions07@gmail.com"
                    className="text-gray-600 hover:text-brand-blue-primary transition-colors"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Placeholder for hero image with gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-primary/20 to-brand-green-primary/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Animated circuit board design */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Grid background */}
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="hsl(var(--brand-blue-primary) / 0.1)"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#grid)" />

                    {/* Circuit lines */}
                    <line
                      x1="80"
                      y1="100"
                      x2="320"
                      y2="100"
                      stroke="hsl(var(--brand-blue-primary))"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <line
                      x1="100"
                      y1="120"
                      x2="100"
                      y2="280"
                      stroke="hsl(var(--brand-green-primary))"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <line
                      x1="300"
                      y1="120"
                      x2="300"
                      y2="280"
                      stroke="hsl(var(--brand-blue-primary))"
                      strokeWidth="2"
                      opacity="0.3"
                    />

                    {/* Connection nodes */}
                    <circle
                      cx="100"
                      cy="100"
                      r="8"
                      fill="hsl(var(--brand-blue-primary))"
                      opacity="0.6"
                    />
                    <circle
                      cx="300"
                      cy="100"
                      r="8"
                      fill="hsl(var(--brand-green-primary))"
                      opacity="0.6"
                    />
                    <circle
                      cx="100"
                      cy="300"
                      r="8"
                      fill="hsl(var(--brand-green-primary))"
                      opacity="0.6"
                    />
                    <circle
                      cx="300"
                      cy="300"
                      r="8"
                      fill="hsl(var(--brand-blue-primary))"
                      opacity="0.6"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="12"
                      fill="hsl(var(--brand-blue-primary))"
                      opacity="0.8"
                    />

                    {/* Globe representation */}
                    <circle
                      cx="200"
                      cy="200"
                      r="60"
                      fill="none"
                      stroke="hsl(var(--brand-green-primary))"
                      strokeWidth="2"
                      opacity="0.4"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="50"
                      fill="none"
                      stroke="hsl(var(--brand-blue-primary))"
                      strokeWidth="1"
                      opacity="0.3"
                    />

                    {/* Data representation */}
                    <text
                      x="200"
                      y="210"
                      textAnchor="middle"
                      fontSize="24"
                      fontWeight="bold"
                      fill="hsl(var(--brand-blue-primary))"
                      opacity="0.5"
                    >
                      &lt; Data /&gt;
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
