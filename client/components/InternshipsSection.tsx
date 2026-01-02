import { GraduationCap, Clock, Award, Briefcase } from "lucide-react";

export default function InternshipsSection() {
  const internshipPlans = [
    {
      duration: "1 Month",
      description: "Perfect for quick skills refresh",
      price: "Affordable",
      features: [
        "Hands-on real-time training",
        "Certificate of completion",
        "Basic project work",
        "Mentorship support",
        "Resume guidance",
      ],
      icon: <Clock className="w-8 h-8" />,
    },
    {
      duration: "3 Months",
      description: "Comprehensive learning experience",
      price: "Popular",
      features: [
        "Deep-dive training program",
        "Advanced project execution",
        "Certificate of completion",
        "Portfolio building",
        "Interview preparation",
        "Placement assistance",
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      highlighted: true,
    },
    {
      duration: "6 Months",
      description: "Complete transformation",
      price: "Premium",
      features: [
        "Intensive hands-on training",
        "Industry-level projects",
        "Advanced certification",
        "Strong portfolio development",
        "Guaranteed placement assistance",
        "Ongoing mentorship",
        "Job support included",
      ],
      icon: <Briefcase className="w-8 h-8" />,
    },
  ];

  const eligibility = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Bachelor's Graduates",
      description: "Fresh graduates from any engineering discipline",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Diploma Students",
      description: "Final year diploma students are welcome",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Freshers",
      description: "Career changers and first-job seekers",
    },
  ];

  return (
    <section
      id="internships"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green-light/10 border border-brand-green-primary/20 rounded-full mb-4">
            <GraduationCap size={16} className="text-brand-green-primary" />
            <span className="text-sm font-semibold text-brand-green-primary">
              Career Development Programs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Internship Programs Built to
            <span className="block bg-gradient-to-r from-brand-blue-primary to-brand-green-primary bg-clip-text text-transparent">
              Launch Your Career
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted for over 5+ years. Gain real-world experience, build your
            portfolio, and secure your dream job with our proven internship
            programs backed by industry expertise since 2019.
          </p>
        </div>

        {/* Eligibility section */}
        <div className="bg-gradient-to-br from-brand-blue-primary/5 to-brand-green-primary/5 rounded-2xl border border-brand-blue-primary/10 p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Who Can Join?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibility.map((item, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-lg border border-gray-200 mb-4">
                  <div className="text-brand-blue-primary">{item.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internship plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Internship Duration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internshipPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl border transition-all duration-300 overflow-hidden group animate-slide-up ${
                  plan.highlighted
                    ? "border-brand-green-primary/50 bg-white shadow-xl scale-105 md:scale-100"
                    : "border-gray-200 bg-white hover:border-brand-blue-primary/50 hover:shadow-lg"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-blue-green text-white text-xs font-bold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${
                      plan.highlighted
                        ? "bg-gradient-blue-green text-white"
                        : "bg-brand-blue-light/20 text-brand-blue-primary"
                    }`}
                  >
                    {plan.icon}
                  </div>

                  {/* Duration */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {plan.duration}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <p className="text-sm font-semibold text-brand-green-primary mb-6">
                    {plan.price}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? "text-brand-green-primary"
                              : "text-brand-blue-light"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`block w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center ${
                      plan.highlighted
                        ? "bg-gradient-blue-green text-white hover:shadow-lg transform hover:scale-105"
                        : "bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional benefits */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            What You Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-green-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-green-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Industry Certificate
                </h4>
                <p className="text-gray-600">
                  Recognized certification upon successful completion
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-blue-light/20 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-brand-blue-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Real Projects</h4>
                <p className="text-gray-600">
                  Work on actual industry projects during your internship
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-green-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-brand-green-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Placement Assistance
                </h4>
                <p className="text-gray-600">
                  Resume building, interview prep, and job recommendations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-brand-blue-light/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-brand-blue-primary" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Flexible Options
                </h4>
                <p className="text-gray-600">
                  Choose between remote and on-site internship programs
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              What Our Interns Say
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">
                  "Excellent hands-on training! The mentors were very supportive
                  and helped me land my first job within 2 weeks of completion."
                </p>
                <p className="font-semibold text-gray-900">- Raj Kumar</p>
                <p className="text-sm text-gray-600">Data Engineer, TCS</p>
                <p className="text-xs text-gray-500 mt-2">June 2021</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">
                  "The 6-month program was worth every moment. Real projects,
                  real problems, real solutions. Highly recommended!"
                </p>
                <p className="font-semibold text-gray-900">- Priya Singh</p>
                <p className="text-sm text-gray-600">
                  Power BI Developer, Accenture
                </p>
                <p className="text-xs text-gray-500 mt-2">March 2022</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">
                  "Life-changing experience! The 3-month program equipped me
                  with practical skills and confidence to excel in my current
                  role at Microsoft."
                </p>
                <p className="font-semibold text-gray-900">- Amit Patel</p>
                <p className="text-sm text-gray-600">
                  Azure Developer, Microsoft
                </p>
                <p className="text-xs text-gray-500 mt-2">September 2020</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">
                  "Outstanding mentorship and real-world exposure. I learned
                  more in 6 months here than I did in my college years. Best
                  decision ever!"
                </p>
                <p className="font-semibold text-gray-900">- Sneha Sharma</p>
                <p className="text-sm text-gray-600">
                  Database Administrator, Cognizant
                </p>
                <p className="text-xs text-gray-500 mt-2">November 2021</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">
                  "The curriculum is industry-relevant and the job placement
                  support was exceptional. I got my dream job within a month of
                  completing the program."
                </p>
                <p className="font-semibold text-gray-900">- Vikram Singh</p>
                <p className="text-sm text-gray-600">ETL Developer, Infosys</p>
                <p className="text-xs text-gray-500 mt-2">February 2022</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-3">
                  "The hands-on approach made learning enjoyable and effective.
                  The mentors are industry experts who truly care about student
                  success."
                </p>
                <p className="font-semibold text-gray-900">- Neha Gupta</p>
                <p className="text-sm text-gray-600">
                  Business Analyst, Deloitte
                </p>
                <p className="text-xs text-gray-500 mt-2">August 2021</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-blue-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Apply Now & Start Your Journey
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
