import { CheckCircle, BookOpen, Users, Zap } from "lucide-react";

export default function TrainingSection() {
  const trainingCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      technologies: ["Azure", "AWS", "GCP"],
    },
    {
      title: "DevOps & CI/CD",
      icon: "⚙️",
      technologies: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub CI/CD",
        "Terraform",
      ],
    },
    {
      title: "Programming",
      icon: "💻",
      technologies: ["Python", "Java", "C#", "JavaScript"],
    },
    {
      title: "Web Development",
      icon: "🌐",
      technologies: ["HTML", "CSS", "React", "Angular", "Node.js"],
    },
    {
      title: "Data Engineering",
      icon: "📊",
      technologies: [
        "SQL",
        "Power BI",
        "Data Warehousing",
        "ETL Tools",
        "Azure Data Factory",
        "Synapse",
        "Snowflake",
      ],
    },
    {
      title: "AI & ML",
      icon: "🤖",
      technologies: ["Machine Learning Basics", "Data Analysis", "Analytics"],
    },
  ];

  const trainingFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "100% Hands-On",
      description: "Real-time, practical training with live coding sessions",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Corporate Trainers",
      description: "Learn from industry experts with years of experience",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interview Prep",
      description: "Comprehensive interview preparation and guidance",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Live Practice",
      description: "Practice environment that mimics real-world scenarios",
    },
  ];

  return (
    <section
      id="training"
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue-light/10 border border-brand-blue-primary/20 rounded-full mb-4">
            <BookOpen size={16} className="text-brand-blue-primary" />
            <span className="text-sm font-semibold text-brand-blue-primary">
              Comprehensive Training Programs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expert Training in Modern
            <span className="block bg-gradient-to-r from-brand-blue-primary to-brand-green-primary bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted for over 5+ years. Master the technologies driving digital
            transformation with our industry-led training programs backed by 5+
            years of real-world expertise.
          </p>
        </div>

        {/* Training categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trainingCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-brand-blue-primary/50 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 bg-brand-blue-light/10 text-brand-blue-primary text-sm font-medium rounded-full border border-brand-blue-light/20 group-hover:bg-brand-blue-light/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Training features */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why Choose Our Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-blue-green/10 rounded-lg mb-4">
                  <div className="text-brand-blue-primary">{feature.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-blue-green text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Enroll in Training Today
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
