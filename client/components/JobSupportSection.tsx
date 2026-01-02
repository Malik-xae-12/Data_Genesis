import { HeadsetIcon, Clock, Users, FileText } from "lucide-react";

export default function JobSupportSection() {
  const supportedTechnologies = [
    {
      tech: "SQL",
      features: ["Queries", "Procedures", "Query Tuning"],
    },
    {
      tech: "Power BI",
      features: ["Reports", "DAX", "Data Modeling"],
    },
    {
      tech: "Microsoft Power Apps",
      features: ["App Development", "Low-Code Solutions", "Data Integration"],
    },
    {
      tech: "Microsoft Power Automate",
      features: [
        "Workflow Automation",
        "Business Process Automation",
        "Cloud Flows",
      ],
    },
    {
      tech: "Azure Data Factory",
      features: ["Pipeline Development", "Data Integration", "Troubleshooting"],
    },
    {
      tech: "Azure Synapse",
      features: ["Analytics", "SQL Pool", "Spark Pool"],
    },
    {
      tech: "Databricks",
      features: ["Spark Jobs", "ML Workflows", "Data Processing"],
    },
    {
      tech: "Python",
      features: ["Automation", "Scripts", "Data Processing"],
    },
    {
      tech: "ETL Tools",
      features: ["Design", "Development", "Optimization"],
    },
    {
      tech: "General Development",
      features: ["Code Review", "Best Practices", "Problem Solving"],
    },
  ];

  const supportFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-Time Task Support",
      description: "Get immediate help on your current tasks and assignments",
    },
    {
      icon: <HeadsetIcon className="w-6 h-6" />,
      title: "Emergency Production Support",
      description:
        "24/7 assistance for production issues and critical problems",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Live Zoom/Teams Sessions",
      description:
        "Direct communication with expert mentors for quick resolution",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Interview & Resume Guidance",
      description: "Professional help with interview prep and resume building",
    },
  ];

  return (
    <section
      id="job-support"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green-primary/10 border border-brand-green-primary/20 rounded-full mb-4">
            <HeadsetIcon size={16} className="text-brand-green-primary" />
            <span className="text-sm font-semibold text-brand-green-primary">
              Professional Job Support
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            24/7 Job Support When You
            <span className="block bg-gradient-to-r from-brand-green-primary to-brand-blue-primary bg-clip-text text-transparent">
              Need It Most
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by professionals for over 5+ years. Supporting real
            production environments since 2019 with expert guidance from
            seasoned industry mentors.
          </p>
        </div>

        {/* Support features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-brand-green-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green-primary/10 rounded-lg mb-4">
                <div className="text-brand-green-primary">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies grid */}
        <div className="bg-gradient-to-br from-brand-blue-dark/5 to-brand-green-primary/5 rounded-2xl border border-brand-blue-primary/10 p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Technologies Supported
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedTechnologies.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <h4 className="font-bold text-brand-blue-primary mb-3">
                  {item.tech}
                </h4>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-brand-green-primary flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Info boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              When You Need Help
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand-green-primary flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">Stuck on code issues</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand-green-primary flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">Production bugs or errors</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand-green-primary flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  Design & architecture advice
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand-green-primary flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">Performance optimization</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-br from-brand-blue-primary/10 to-brand-green-primary/10 rounded-xl border border-brand-blue-primary/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="text-gray-600">
                <span className="font-semibold">Contact us</span> via email or
                phone with your issue
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Get scheduled</span> for a live
                support session
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Get expert guidance</span> from
                our mentors
              </li>
              <li className="text-gray-600">
                <span className="font-semibold">Solve your problem</span> with
                confidence
              </li>
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-green-primary to-brand-blue-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Request Job Support Now
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
