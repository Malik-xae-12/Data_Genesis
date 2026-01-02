import { Briefcase, TrendingUp, Globe, BarChart3 } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      client: "Retail Client",
      description:
        "Interactive Power BI dashboard for tracking sales, inventory, and customer behavior across multiple channels",
      technologies: ["Power BI", "SQL", "Excel"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Azure Data Pipeline Automation",
      client: "UAE Logistics Company",
      description:
        "Automated ETL pipeline using Azure Data Factory to process supply chain data in real-time",
      technologies: ["Azure Data Factory", "SQL", "Azure Storage"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Power BI Reporting System",
      client: "Manufacturing Group",
      description:
        "Comprehensive reporting solution for production metrics, quality control, and operational KPIs",
      technologies: ["Power BI", "DAX", "SQL"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Website + CRM Module",
      client: "Tech Startup",
      description:
        "Full-stack web application with integrated CRM for customer management and sales tracking",
      technologies: ["React", "Node.js", "MongoDB"],
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "Inventory Management System",
      client: "Textile Industry",
      description:
        "Web-based inventory tracking system with real-time stock updates and predictive analytics",
      technologies: ["Python", "PostgreSQL", "React"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
    },
    {
      id: 6,
      title: "Data Warehouse Migration",
      client: "Enterprise Corporation",
      description:
        "Large-scale migration of legacy systems to cloud-based data warehouse using Snowflake",
      technologies: ["Snowflake", "SQL", "ETL Tools"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-green-light rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green-light/10 border border-brand-green-primary/20 rounded-full mb-4">
            <Briefcase size={16} className="text-brand-green-primary" />
            <span className="text-sm font-semibold text-brand-green-primary">
              Portfolio & Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Freelance Projects We
            <span className="block bg-gradient-to-r from-brand-green-primary to-brand-blue-primary bg-clip-text text-transparent">
              Can Execute
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase of real-world projects we've delivered since 2019. Trusted
            by businesses for quality execution and proven expertise.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-brand-green-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Header with gradient */}
              <div
                className={`h-24 bg-gradient-to-br ${project.color} flex items-center justify-center text-white relative overflow-hidden`}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,.05)_10px,rgba(255,255,255,.05)_20px)]"></div>
                </div>
                <div className="relative">{project.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold text-brand-green-primary uppercase tracking-wider mb-2">
                  {project.client}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded border border-gray-200 group-hover:border-brand-green-primary/30 group-hover:bg-brand-green-primary/5 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="bg-gradient-to-r from-brand-blue-primary/10 to-brand-green-primary/10 rounded-2xl border border-brand-blue-primary/20 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Have a Project Idea?
              </h3>
              <p className="text-gray-600">
                We can help you build, deploy, and optimize your next big
                project
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-4 bg-gradient-blue-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Request a Project Quote
            </a>
          </div>
        </div>

        {/* Why choose us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-blue-light/20 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-brand-blue-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Quality Assured</h4>
            <p className="text-gray-600 text-sm">
              High-quality deliverables meeting international standards
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green-primary/20 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-brand-green-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">On-Time Delivery</h4>
            <p className="text-gray-600 text-sm">
              Projects delivered on schedule with transparent timelines
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-blue-light/20 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-brand-blue-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Expert Team</h4>
            <p className="text-gray-600 text-sm">
              Dedicated professionals with industry expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
